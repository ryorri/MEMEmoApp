import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { Backend } from "../..";
import { SessionDTO } from "../utilities/backendLibrary/MEMEmoAppBackend";
import styles from "../components/styles";

const RankingScreen: React.FC = () => {
  const [ranking, setRanking] = useState<RankedUser[]>([]);
  const [loading, setLoading] = useState(true);

  type RankedUser = {
    username: string;
    score: number | null;
    userId: string | null;
  };

  const fetchData = async () => {
    try {
      const sessions: SessionDTO[] = await Backend.getRanking();

      const uniqueUserIds = Array.from(new Set(sessions.map((s) => s.userId)));

      const users = await Promise.all(
        uniqueUserIds.map(async (id) => {
          const user = await Backend.user(id);
          return { id, name: user.userName };
        })
      );

      const rankedUsers: RankedUser[] = sessions.map((session) => {
        const user = users.find((u) => u.id === session.userId);
        return {
          userId: session.userId ?? "unknown",
          username: user?.name || "Unknown",
          score: session.score ?? 0,
        };
      });

      setRanking(rankedUsers);
      setLoading(false);
    } catch (err) {
      console.error("Ranking fetch error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading ranking...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Global Ranking</Text>
      <FlatList
        data={ranking}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.position}>{index + 1}.</Text>
            <Text>{item.username}</Text>
            <Text style={styles.scoree}>{item.score} pts</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RankingScreen;
