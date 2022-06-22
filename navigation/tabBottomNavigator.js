import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from "../screens/home";
import About from "../screens/about";
import Contact from "../screens/contact";

const Tab = createMaterialBottomTabNavigator();

const screenOptionStyle = {
  headerLeft: null
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptionStyle}>
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="About" component={About}  />
      <Tab.Screen name="Contact" component={Contact}  />
    </Tab.Navigator>
  );
};

export {BottomTabNavigator};