import { Button, Input } from "react-native-elements";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from "react-native";

import Game from "./views/game";
import React from "react";
import TeamsEntry from "./views/teams_entry";
import { createStackNavigator } from "react-navigation";

export default createStackNavigator({
  Home: {
    screen: TeamsEntry
  },
  Game: {
    screen: Game
  }
});
