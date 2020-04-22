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
    const db = firebase.firestore();

    db.collection("questions-answers")
      .add({
        question: this.state.question,
        answer: this.state.answer,
      })
      .then(function () {
        console.log("Document successfully written!");
      });
    // .catch(function (error) {defaultValue={question}
    //   console.error("Error writing document: ", error);
    // });
  };
  // ReadData = () => {
  //   const db = firebase.firestore();
  //   const { qs } = this.state;
  //   db.collection("questions-answers")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         qs.push(doc.data());
  //       });

  //       this.setState({ qs });
  //     });
  // };
  // componentDidMount() {
  //   this.ReadData();
  // }
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
          defaultValue={question}
        />
        <TextInput
          style={styles.Input}
          placeholder="Enter Answer"
          multiline={false}
          autoCapitalize="none"
          placeholderTextColor="white"
          name="answer"
          onChange={this.handleChange}
          defaultValue={answer}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={this.addQues}
        >
          <Text style={{ color: "black", fontSize: 25 }}> add </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.TouchableOpacity}
          onPress={this.ReadData}
        >
          <Text style={{ color: "black", fontSize: 25 }}> Quiz! </Text>
        </TouchableOpacity> */}
      </View>
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
  Input: {
    width: 345,
    height: 50,
    backgroundColor: "red",
    margin: 5,

    padding: 8,
    borderColor: "black",
    borderWidth: 1,

    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  TouchableOpacity: {
    borderWidth: 2,
    borderColor: "blue",
    margin: 5,
  },
});
