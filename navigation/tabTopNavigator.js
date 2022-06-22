import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "../screens/home";
import About from "../screens/about";
import Contact from "../screens/contact";

const Tab = createMaterialTopTabNavigator();

const screenOptionStyle = {
  headerLeft: null,
  tabBarLabelStyle: { fontSize: 12 },
  tabBarItemStyle: { paddingTop: 50,  width: 100 },
  tabBarStyle: { backgroundColor: 'powderblue' },
};

const TopTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="About" component={About}  />
      <Tab.Screen name="Contact" component={Contact}  />
    </Tab.Navigator>
  );
};

export {TopTabNavigator};