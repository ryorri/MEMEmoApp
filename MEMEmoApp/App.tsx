import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import StartGame from "./src/screens/GameScreen";
import UserScreen from "./src/screens/UserScreen";
import RankingScreen from "./src/screens/RankingScreen";
import PersonalRankingScreen from "./src/screens/PersonalRankingScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "Welcome Page" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: "Sign up" }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="StartGame"
          component={StartGame}
          options={{ title: "Memory game" }}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{ title: "User Screen" }}
        />
        <Stack.Screen
          name="Ranking"
          component={RankingScreen}
          options={{ title: "Ranking" }}
        />
        <Stack.Screen
          name="PersonalRank"
          component={PersonalRankingScreen}
          options={{ title: "Personal ranking" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
