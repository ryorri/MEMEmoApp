import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Backend } from "../..";
import { LoginUserDto } from "../utilities/backendLibrary/MEMEmoAppBackend";
import { StackNavigationProp } from "@react-navigation/stack";

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

const LoginScreen: React.FC<Props> = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState(""); // Nowy stan dla komunikatu

  const handleLogin = async () => {
    const dto = new LoginUserDto();
    dto.init({ userName: login, password: password });

    try {
      await Backend.login(dto); // Jeśli nie zwraca wartości, po prostu czekamy na zakończenie operacji
    } catch (error) {
      setLoginMessage("Please, check login or password!\n" + error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
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
      <Button title="Log in" onPress={handleLogin} />
      {loginMessage ? <Text style={styles.message}>{loginMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  message: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
