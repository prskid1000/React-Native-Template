import React from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { Card } from 'react-native-elements';
import { store } from "../redux/store";
import actions from "../redux/actions";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Contact = ({ navigation }) => {

  actions.setLocalName.payload = "Contact"
  store.dispatch(actions.setLocalName)

  return (
    <View style={styles.center}>
       <ScrollView style={styles.cardView} horizontal={true}>
       <Card>
            <Card.Title>CARD-1</Card.Title>
            <Card.Divider />
            <Text>HI, I am here</Text>
       </Card>
       <Card>
            <Card.Title>CARD-2</Card.Title>
            <Card.Divider />
            <Text>HI, I am here</Text>
       </Card>
       <Card>
            <Card.Title>CARD-3</Card.Title>
            <Card.Divider />
            <Text>HI, I am here</Text>
       </Card>
       <Card>
            <Card.Title>CARD-3</Card.Title>
            <Card.Divider />
            <Text>HI, I am here</Text>
       </Card>
       </ScrollView>
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
  cardView: {
    height: windowHeight * 0.5
  },
});

export default Contact;