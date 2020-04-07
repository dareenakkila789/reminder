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
} from "react-native";
import * as firebase from "firebase";

export default class login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  upload = () => {
    const users = firebase.database().ref("users");
    users.push({
      email: this.state.email,
      password: this.state.password,
    });
    alert("Logged in successfully!");
  };

  // onSignup = () => {
  //   this.props.navigation.navigate("signUp");
  // };

  onlogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        alert("Successfully logged in");
        // this.props.navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* <Image
              style={{ width: 500, height: 500 }}
              source={require("../assets/logo.png")}
            /> */}

        <TextInput
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
          placeholderTextColor={"white"}
          placeholder={"Email"}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
          placeholderTextColor={"white"}
          placeholder={"Password"}
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={styles.login}>
          <TouchableOpacity onPress={this.onlogin}>
            <Text style={{ color: "#00cec9", fontSize: 25 }}>Login</Text>
          </TouchableOpacity>
          <Text style={{ color: "white", margin: 10, fontSize: 18 }}> Or</Text>
          <TouchableOpacity onPress={this.onSignup}>
            <Text style={{ color: "#00cec9", fontSize: 25 }}>Signup</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "black",
    margin: 10,

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
