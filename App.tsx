import "react-native-gesture-handler";
import { useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/homeScreen/HomeScreen";
import RegistrationScreen from "./screens/registrationScreen/RegistrationScreen";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import PostsScreen from "./screens/postsScreen/PostsScreen";
import CreatePostsScreen from "./screens/createPostsScreen/CreatePostsScreen";
import CommentsScreen from "./screens/commentsScreen/CommentsScreen";
import ProfileScreen from "./screens/profileScreen/ProfileScreen";
import MapScreen from "./screens/mapScreen/MapScreen";

import { colors } from "./assets/styles/globalStyles";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        color={colors.buttonColor}
        size={"large"}
      />
    );
  }

  const AppNavigator = createStackNavigator();

  return (
    <NavigationContainer>
      <AppNavigator.Navigator initialRouteName="Home">
        <AppNavigator.Screen
          name="Home"
          component={HomeScreen}
        />
        <AppNavigator.Screen
          name="Registration"
          component={RegistrationScreen}
        />
        <AppNavigator.Screen
          name="Login"
          component={LoginScreen}
        />
        <AppNavigator.Screen
          name="Posts"
          component={PostsScreen}
        />
        <AppNavigator.Screen
          name="CreatePosts"
          component={CreatePostsScreen}
        />
        <AppNavigator.Screen
          name="Comments"
          component={CommentsScreen}
        />
        <AppNavigator.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <AppNavigator.Screen
          name="Map"
          component={MapScreen}
        />
        {/* <StatusBar style="auto" /> */}
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
}
