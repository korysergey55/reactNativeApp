import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/homeScreen/HomeScreen";
import RegistrationScreen from "../screens/registrationScreen/RegistrationScreen";
import LoginScreen from "../screens/loginScreen/LoginScreen";
import PostsScreen from "../screens/postsScreen/PostsScreen";
import CreatePostsScreen from "../screens/createPostsScreen/CreatePostsScreen";
import CommentsScreen from "../screens/commentsScreen/CommentsScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import MapScreen from "../screens/mapScreen/MapScreen";

import TabNavigator from "./TabNavigator";

const StackNavigator = () => {
  const StackNavigator = createStackNavigator();
  return (
    <StackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackNavigator.Screen
        name="Home"
        component={TabNavigator}
      />
      <StackNavigator.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{
          title: "",
          cardOverlayEnabled: false,
          cardStyle: { backgroundColor: "transparent" },
          headerStyle: {
            height: 0,
          },
          headerTruncatedBackTitle: "Go Beck",
        }}
      />
      <StackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "",
          cardOverlayEnabled: false,
          cardStyle: { backgroundColor: "transparent" },
          headerStyle: {
            height: 0,
          },
        }}
      />
      <StackNavigator.Screen
        name="Posts"
        component={PostsScreen}
      />
      <StackNavigator.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <StackNavigator.Screen
        name="Comments"
        component={CommentsScreen}
      />
      <StackNavigator.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <StackNavigator.Screen
        name="Map"
        component={MapScreen}
      />
    </StackNavigator.Navigator>
  );
};

export default StackNavigator;
