import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Backend } from "../..";
import { LoginUserDto } from "../utilities/backendLibrary/MEMEmoAppBackend";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "../components/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RootStackParamList = {
  Dashboard: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleLogin = async (nav: LoginScreenNavigationProp) => {
    const dto = new LoginUserDto();
    dto.init({ userName: login, password: password });

    try {
      const response = await Backend.login(dto);

      if (response != null) {
        await AsyncStorage.setItem("user", JSON.stringify(response));
        nav.navigate("Dashboard");
      }
    } catch (error) {
      setLoginMessage("Please, check login or password!\n");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/login_logo.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Hi again!</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLogin(navigation)}
      >
        <Text style={styles.textInButton}>Log in</Text>
      </TouchableOpacity>

      {loginMessage ? <Text style={styles.message}>{loginMessage}</Text> : null}
    </View>
  );
};

export default LoginScreen;
