import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/loginScreen/LoginScreen";
import PostsScreen from "../screens/postsScreen/PostsScreen";
import CreatePostsScreen from "../screens/createPostsScreen/CreatePostsScreen";
import CommentsScreen from "../screens/commentsScreen/CommentsScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import MapScreen from "../screens/mapScreen/MapScreen";

import TabNavigator from "./TabNavigator";
import GoBeckButton from "../components/goBeckButton/GoBeckButton";
import TabCreatePublicationIcon from "../iconsComponents/tabBarIcons/TabCreatePublicationIcon";

import { colors } from "../assets/styles/globalStyles";
import RegistrationScreen from "../screens/RegistrationScreen/RegistrationScreen";

const StackNavigator = () => {
  const StackNavigator = createStackNavigator();
  return (
    <StackNavigator.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        headerTitleStyle: styles.header,
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
        component={TabNavigator}
      />
      <StackNavigator.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerLeft: () => <GoBeckButton />,
        }}
      />
      <StackNavigator.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
          headerShown: true,
          headerLeft: () => <GoBeckButton />,
          headerLeftContainerStyle: { paddingLeft: 16 },
        }}
      />
      <StackNavigator.Screen
        name="Profile"
        component={ProfileScreen}
      />
      <StackNavigator.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Map",
          headerShown: true,
          headerLeft: () => <GoBeckButton />,
          headerLeftContainerStyle: { paddingLeft: 16 },
        }}
      />
    </StackNavigator.Navigator>
  );
};
const styles = StyleSheet.create({
  header: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 22,
    color: colors.primaryTextColor,
  },
});

export default StackNavigator;
