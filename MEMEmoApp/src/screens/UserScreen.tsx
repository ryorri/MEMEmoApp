import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "../components/styles";

type RootStackParamList = {
  Dashboard: undefined;
  User: undefined;
};

type UserScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: UserScreenNavigationProp;
};

const UserScreen: React.FC<Props> = ({ navigation }) => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedData = await AsyncStorage.getItem("user");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setUserData(parsedData);
        } else {
          console.log("Brak danych w storage.");
        }
      } catch (error) {
        console.error("Błąd przy ładowaniu danych z AsyncStorage: ", error);
      }
    };

    loadUserData();
  }, []);

  return (
    <View style={styles.container}>
      {userData ? (
        <>
          <Text style={styles.title}>User data</Text>
          <Text style={styles.text}>Username: {userData.userName}</Text>
          <Text style={styles.text}>Email: {userData.email}</Text>
          <Text style={styles.text}>Id: {userData.id}</Text>
        </>
      ) : (
        <Text style={styles.text}>Loading data...</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.textInButton}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserScreen;
