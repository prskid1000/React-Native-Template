import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./navigation/stackNavigator";
import { DrawerNavigator } from "./navigation/drawerNavigator";
import { BottomTabNavigator } from "./navigation/tabBottomNavigator";
import { TopTabNavigator } from "./navigation/tabTopNavigator";

 const App = () => {
  return (
    <NavigationContainer>
      <TopTabNavigator/>
    </NavigationContainer>
  );
}
export default App