import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import checkConnection from "../utilities/extensions/ConnectDatabase";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const [isDbConnected, setIsDbConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchConnectionStatus = async () => {
      try {
        const conn = await checkConnection();
        setIsDbConnected(conn);
      } catch (error) {
        Alert.alert("Error", "Could not check connection status.");
      }
    };

    fetchConnectionStatus();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.title}>Welcome to MEMEmo!</Text>
      <Image source={require("../meme/logo.jpg")} style={styles.image} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textInButton}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.textInButton}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d5ede0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 100, // Zaokrąglone rogi (zakładając, że obrazek jest kwadratowy)
    borderWidth: 5, // Grubość ramki
    borderColor: "white", // Kolor ramki
    overflow: "hidden", // Ukrywa wszystko, co wychodzi poza obszar zaokrąglonego obrazu
  },
  button: {
    backgroundColor: "#4CAF50", // Kolor tła przycisku
    paddingVertical: 12, // Odstęp pionowy wewnątrz przycisku
    paddingHorizontal: 30, // Odstęp poziomy wewnątrz przycisku
    borderRadius: 5, // Zaokrąglone rogi
    width: 150,
    height: 50,
    alignItems: "center",
    margin: 10,
  },
  textInButton: {
    color: "white", // Kolor tekstu
    fontSize: 18, // Rozmiar czcionki
    textAlign: "center", // Wyśrodkowanie tekstu
    fontWeight: "bold", // Pogrubienie tekstu
  },
  text: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
