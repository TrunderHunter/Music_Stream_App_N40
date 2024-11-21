import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import FeedScreen from "../screens/FeedScreen";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";
import LibraryScreen from "../screens/LibraryScreen";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen";

const MainNavigator = () => {
  const isLoggedIn = useSelector(
    (state: { auth: { isLoggedIn: boolean } }) => state.auth.isLoggedIn
  );
  const Tab = createBottomTabNavigator();
  return (
    <>
      {isLoggedIn ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <AntDesign name="home" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <AntDesign name="search1" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Feed"
            component={FeedScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="library-music" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Library"
            component={LibraryScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="library-outline" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <AuthNavigator />
      )}
    </>
  );
};

export default MainNavigator;
