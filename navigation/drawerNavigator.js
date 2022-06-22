import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/home";
import About from "../screens/about";
import Contact from "../screens/contact";

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerLeft: null
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  );
}

export {DrawerNavigator};