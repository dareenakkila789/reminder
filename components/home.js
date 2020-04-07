import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import uuid from "uuid";

export default class HomeScreen extends React.Component {
  state = {
    question: "",
    answer: "",
    qs: [],
  };

  handleChange = (e) => {
    let key = e.target.name;
    this.setState({
      [key]: e.target.value,
    });
  };
  addQues = () => {
    alert("It's added!");
    firebase.database().ref("questions-answers").push({
      question: this.state.question,
      answer: this.state.answer,
    });
  };
  ReadData = () => {
    const db = firebase.firestore();
    const { qs } = this.state;
    db.collection("questions-answers")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          qs.push(doc.data());
        });

        this.setState({ qs });
      });
  };
  componentDidMount() {
    this.ReadData();
  }
  render() {
    let { question, answer, qs } = this.state;
    console.log(qs);
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.Input}
          placeholder="Enter Question"
          multiline={false}
          autoCapitalize="none"
          placeholderTextColor="white"
          name="question"
          onChange={this.handleChange}
        />
        <TextInput
          style={styles.Input}
          placeholder="Enter Answer"
          multiline={false}
          autoCapitalize="none"
          placeholderTextColor="white"
          name="answer"
          onChange={this.handleChange}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={this.addQues}
        >
          <Text style={{ color: "#00cec9", fontSize: 25 }}> add </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={this.ReadData}
        >
          <Text style={{ color: "#00cec9", fontSize: 25 }}> Quiz! </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Input: {
    width: 345,
    height: 50,
    backgroundColor: "black",
    margin: 5,

    padding: 8,
    borderColor: "white",
    borderWidth: 1,

    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  TouchableOpacity: {
    borderWidth: 2,
    borderColor: "white",
    margin: 5,
  },
});
