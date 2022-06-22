import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import About from "../screens/about";
import Contact from "../screens/contact";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerLeft: null
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}

export {StackNavigator};
