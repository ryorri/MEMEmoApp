import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Backend } from "../..";
import { RegisterUserDto } from "../utilities/backendLibrary/MEMEmoAppBackend";

const RegisterScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  const handleRegister = async () => {
    try {
      const dto = new RegisterUserDto();
      dto.init({ userName: login, email: email, password: password });
      await Backend.register(dto);
      setRegisterMessage("You are one of us!");
    } catch (error) {
      setRegisterMessage("Something goes wrong \n" + error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Play with us!</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign up" onPress={handleRegister} />
      {registerMessage ? (
        <Text style={styles.message}>{registerMessage}</Text>
      ) : null}
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

export default RegisterScreen;
