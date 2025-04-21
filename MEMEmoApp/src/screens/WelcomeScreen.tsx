import React, { useEffect, useState } from "react";
import { View, Text, Alert, Image, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import checkConnection from "../utilities/extensions/ConnectDatabase";
import styles from "../components/styles";

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

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
      <Image source={require("../../assets/logo.jpg")} style={styles.image} />
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

export default WelcomeScreen;
