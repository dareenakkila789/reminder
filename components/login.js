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
import signUp from "./signUp";
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
  moving = () => {
    this.props.navigation.navigate("signUp");
  };
  moving1 = () => {
    this.props.navigation.navigate("home");
  };

  functionCombined() {
    this.moving1();
    this.onlogin();
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={{ margin: 40, width: 100, height: 100 }}
          source={require("../components/bell.png")}
        />

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
          <View>
            {/* <Button
              onPress={() => this.onlogin}
              title="Login"
              color="#0000ff"
            /> */}
            <TouchableOpacity onPress={this.onlogin}>
              <Text style={{ color: "black", fontSize: 25 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={this.moving}>
            <Text style={{ color: "black", fontSize: 25, marginTop: 5 }}>
              You don't have an account?
            </Text>
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
    backgroundColor: "red",
    margin: 10,

    padding: 4,
    borderColor: "white",
    borderWidth: 1,

    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    backgroundColor: "white",
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
  vie: {
    justifyContent: "center",
    alignItems: "center",
  },
});
