import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import FeedScreen from "../screens/FeedScreen";
import AuthNavigator from "./AuthNavigator";
import { useSelector } from "react-redux";
import LibraryScreen from "../screens/LibraryScreen";

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
          <Tab.Screen name="Home" component={HomeNavigator} />
          <Tab.Screen name="Search" component={FeedScreen} />
          <Tab.Screen name="Feed" component={FeedScreen} />
          <Tab.Screen name="Library" component={LibraryScreen} />
        </Tab.Navigator>
      ) : (
        <AuthNavigator />
      )}
    </>
  );
};

export default MainNavigator;
