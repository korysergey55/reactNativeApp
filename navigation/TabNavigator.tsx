import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "../screens/postsScreen/PostsScreen";
import CreatePostsScreen from "../screens/createPostsScreen/CreatePostsScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";

import { StyleSheet } from "react-native";
import { colors } from "../assets/styles/globalStyles";
import GoBeckButton from "../components/goBeckButton/GoBeckButton";
import LogoutButton from "../components/logoutButton/LogoutButton";
import TabPublicationsIcon from "../iconsComponents/tabBarIcons/TabPublicationsIcon";
import TabCreatePublicationIcon from "../iconsComponents/tabBarIcons/TabCreatePublicationIcon";
import TabProfileIcon from "../iconsComponents/tabBarIcons/TabProfileIcon";

const TabNavigator = () => {
  const TabNavigator = createBottomTabNavigator();
  return (
    <TabNavigator.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerTitleStyle: styles.header,
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerRightContainerStyle: { paddingRight: 16 },
        tabBarActiveTintColor: colors.buttonColor,
        // tabBarActiveBackgroundColor: colors.buttonColor,
        // tabBarItemStyle: { borderRadius: 50 },
      }}
    >
      <TabNavigator.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => <LogoutButton />,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabPublicationsIcon color={focused && colors.buttonColor} />
          ),
        }}
      />
      <TabNavigator.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerLeft: () => <GoBeckButton />,
          headerRight: () => <LogoutButton />,
          tabBarShowLabel: false,
          tabBarIcon: () => <TabCreatePublicationIcon />,
        }}
      />
      <TabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Профіль",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <TabProfileIcon color={focused && colors.buttonColor} />,
        }}
      />
    </TabNavigator.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 22,
    color: colors.primaryTextColor,
  },
});

export default TabNavigator;
