import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Backend } from "../..";
import { RegisterUserDto } from "../utilities/backendLibrary/MEMEmoAppBackend";
import styles from "../components/styles";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Welcome: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  const handleRegister = async (nav: RegisterScreenNavigationProp) => {
    try {
      const dto = new RegisterUserDto();
      dto.init({ userName: login, email: email, password: password });
      await Backend.register2(dto);
      nav.navigate("Welcome");
    } catch (error) {
      setRegisterMessage("Something goes wrong \n" + error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/register_logo.png")}
        style={styles.image}
      />
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRegister(navigation)}
      >
        <Text style={styles.textInButton}>Sign up</Text>
      </TouchableOpacity>

      {registerMessage ? (
        <Text style={styles.message}>{registerMessage}</Text>
      ) : null}
    </View>
  );
};

export default RegisterScreen;
