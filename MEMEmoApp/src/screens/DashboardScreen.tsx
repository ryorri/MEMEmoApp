import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "../components/styles";
import { Image } from "expo-image";

type RootStackParamList = {
  Dashboard: undefined;
  StartGame: undefined;
  UserScreen: undefined;
  Ranking: undefined;
  PersonalRank: undefined;
};

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: DashboardScreenNavigationProp;
};

const DashboardScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.navButtons_ranking}
        onPress={() => navigation.navigate("Ranking")}
      >
        <Image
          style={styles.imageInNavButtons}
          source={require("../../assets/ranking.png")}
          contentFit="contain"
        />
        <Text style={styles.textInNavButton}>RANKING</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButtons_personalranking}
        onPress={() => navigation.navigate("PersonalRank")}
      >
        <Image
          style={styles.imageInNavButtons}
          source={require("../../assets/ranking.png")}
          contentFit="contain"
        />
        <Text style={styles.textInNavButton}>PERSONAL RANKING</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButtons_user}
        onPress={() => navigation.navigate("UserScreen")}
      >
        <Image
          style={styles.imageInNavButtons}
          source={require("../../assets/user.png")}
          contentFit="contain"
        />
        <Text style={styles.textInNavButton}>USER</Text>
      </TouchableOpacity>

      <Image
        source={require("../../assets/dashboard_main_meme.gif")}
        style={styles.gifImage}
        contentFit="contain"
      />

      <TouchableOpacity
        style={styles.startGameButton}
        onPress={() => navigation.navigate("StartGame")}
      >
        <Text style={styles.textInButton}>START!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
