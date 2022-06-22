import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { store } from "../redux/store";
import actions from "../redux/actions";

const Home = ({ navigation }) => {

  actions.setLocalName.payload = "Home"
  store.dispatch(actions.setLocalName)


  return (
    <View style={styles.center}>
      <Text>{JSON.stringify(store.getState())}</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")} // We added an onPress event which would navigate to the About screen
      />
       <Button
        title="Go to Contact Screen"
        onPress={() => navigation.navigate("Contact")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;