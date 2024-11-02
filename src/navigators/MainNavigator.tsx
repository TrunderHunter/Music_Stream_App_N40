import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import Feed from "../screens/Feed";
import AuthNavigator from "./AuthNavigator";

const MainNavigator = () => {
  const [isLogged, setIsLogged] = useState(false);
  const Tab = createBottomTabNavigator();

  return (
    <>
      {isLogged ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeNavigator} />
          <Tab.Screen name="Feed" component={Feed} />
        </Tab.Navigator>
      ) : (
        <AuthNavigator />
      )}
    </>
  );
};

export default MainNavigator;
