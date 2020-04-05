import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
  Button,
  Picker,
} from "react-native";
import * as firebase from "firebase";

export default class signUp extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    age: "",
  };
  upload = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        alert("successfully created acount");
        this.props.navigation.navigate("App");
      });
    const users = firebase.database().ref("users");
    users
      .push({
        email: this.state.email,
        password: this.state.password,
      })
      .catch((error) => {
        if (error.code == "auth/email_already_in_use") {
          alert("Email address already in use");
        } else if (error.code == "auth/weak-password") {
          alert("The password is weak.");
        } else {
          alert(error.message);
        }
      });
    alert("You are Signed up successfully!");
  };
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  onSignup = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        alert("Successfully logged in!");
        // this.props.navigation.navigate("Home");
      })
      .cathch((error) => {
        if (error.code == "auth/email-already-in-use") {
          alert("Email adress is already in use");
        } else if (error.code == "auth/weak-password") {
          alret("The password is too weak");
        } else {
          alert(error.message);
        }
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.back}>
          {/* <Image
                style={{ width: 20, height: 20, marginTop: 30 }}
                source={require("../assets/back.png")}
              /> */}
        </TouchableOpacity>
        {/* <Image
              style={{ width: 400, height: 400 }}
              source={require("../assets/Logo1.png")}
            /> */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("username", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("password", val)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("email", val)}
        />

        <TextInput
          style={styles.input}
          placeholder="Age"
          autoCapitalize="none"
          placeholderTextColor="white"
          onChangeText={(val) => this.onChangeText("Age", val)}
        />
        <TouchableOpacity onPress={this.upload}>
          <Text style={{ color: "#00cec9", fontSize: 25 }}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
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
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
