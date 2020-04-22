import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import * as firebase from "firebase";

export default class Read extends React.Component {
  state = {
    Questions: [],
  };
  ReadPosts = () => {
    firebase
      .database()
      .ref("questions-answers")
      .on("value", (ReadPosts) => {
        const data = Questions.val();
        var Questions = [];
        for (var key in data) {
          Questions.push(questions - answers);
        }
        console.log("Questions");
      });
  };
  componentWillMount() {
    this.ReadPosts();
  }
  render() {
    return (
      <ScrollView>
        <Text>{this.state.Questions}</Text>
        <FlatList>
          numColumns={1}
          {/* contentContainerStyle={styles.View} */}
          data={this.state.Questions}
          renderItem={this.renderItem}
        </FlatList>
      </ScrollView>
    );
  }
}

// styles = StyleSheet.create({
//   View: {
//     flex: 1,
//     alignItems: "center",
//     // justifyContent: 'center',
//     backgroundColor: "#55E6C1",
//   },
// });
