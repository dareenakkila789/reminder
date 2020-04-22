import React from "react";
import {
  Alert,
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  NavLink,
} from "react-native";
import home from "./home";
import * as firebase from "firebase";

export default class ques extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Questions",
    };
  };
  moving = () => {
    this.props.navigation.navigate("quiz");
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{ fontSize: 25 }}>It's time to quiz you!</Text>
        <TouchableOpacity onPress={this.moving}>
          <Text>quiz</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
