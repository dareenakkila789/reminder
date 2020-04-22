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

export default class grade extends React.Component {
  moving = () => {
    this.props.navigation.navigate("home");
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          style={{ margin: 40, width: 100, height: 100 }}
          source={require("../components/bell.png")}
        />
        <Text style={styles.choosing}>Choose your grade!</Text>
        <View style={{ margin: 30 }}>
          <Button
            style={{
              marginBottom: 20,
            }}
            title="Tenth grade"
            color="#0000ff"
          />
        </View>
        <View style={{ margin: 30 }}>
          <Button
            style={{
              marginBottom: 20,
            }}
            title="Eleventh grade"
            color="#0000ff"
          />
        </View>
        {/* <View style={styles.login}>
          <View>
            <TouchableOpacity onPress={this.moving}>
              <Text style={{ color: "black", fontSize: 25 }}>Tenth grade</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={this.moving}>
            <Text style={{ color: "black", fontSize: 25, marginTop: 10 }}>
              Eleventh grade
            </Text>
          </TouchableOpacity>
        </View> */}
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
    fontSize: 25,
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

  choosing: {
    borderWidth: 5,
    borderColor: "red",
    margin: 5,
    padding: 10,
    fontSize: 25,
    fontFamily: "sans-serif",
  },
});
