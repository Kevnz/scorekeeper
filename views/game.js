import { Button, Input } from "react-native-elements";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { createStackNavigator } from "react-navigation";

const BG_IMAGE = require("../assets/bg1.jpg");

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
export default class TeamsEntry extends React.Component {
  static navigationOptions = {
    title: "Scorekeeper - Game"
  };
  render() {
    const { navigation } = this.props;
    const home = navigation.getParam("homeTeam", "Home Team");
    const away = navigation.getParam("awayTeam", "Away Team");
    return (
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <View style={styles.home}>
            <Text>{home}</Text>
          </View>
          <View style={styles.away}>
            <Text>{away}</Text>
          </View>
          <View style={styles.row} />
          <Button title="Continue" />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  home: {
    width: SCREEN_WIDTH + 100
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: "center",
    alignItems: "center"
  }
});
