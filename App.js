import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Home from "./components/home";
import login from "./components/login";
import signUp from "./components/signUp";

import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8yRaA5V-hrWjm7sl-8zSF-DJ2ZkE2OFU",
  authDomain: "exchange-experiences.firebaseapp.com",
  databaseURL: "https://exchange-experiences.firebaseio.com",
  projectId: "exchange-experiences",
  storageBucket: "exchange-experiences.appspot.com",
  messagingSenderId: "318757269452",
  appId: "1:318757269452:web:e42dfac2463d95448db769",
  measurementId: "G-4P8152PSVS",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Tabs = createBottomTabNavigator({
  Home: Home,
  signUp: signUp,
  login: login,
});

const App = createAppContainer(Tabs);
export default App;
