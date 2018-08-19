import { Button, Input } from "react-native-elements";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
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
    title: "Scorekeeper - Home"
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={BG_IMAGE} style={styles.bgImage}>
          <View style={styles.imgRow}>
            <Image
              source={require("../assets/netball_white.png")}
              style={{
                width: 200,
                height: 200,
                marginBottom: 20
              }}
            />
          </View>
          <View style={styles.row}>
            <Input
              placeholder="Home Team"
              placeholderTextColor="#86939e"
              inputStyle={{ color: "white" }}
              leftIcon={
                <Icon
                  name="users"
                  type="font-awesome"
                  color="#86939e"
                  size={25}
                />
              }
              shake={true}
              onChangeText={home_team => this.setState({ home_team })}
              ref={input => (this.homeInput = input)}
            />
          </View>
          <View style={styles.row}>
            <Input
              placeholder="Away Team"
              inputStyle={{ color: "white" }}
              shake={true}
              placeholderTextColor="#86939e"
              leftIcon={
                <Icon
                  name="users"
                  type="font-awesome"
                  color="#86939e"
                  size={25}
                />
              }
              onChangeText={away_team => this.setState({ away_team })}
            />
          </View>
          <Button
            title="Continue"
            onPress={() => {
              const homeTeam = this.state.home_team;
              const awayTeam = this.state.away_team;
              this.props.navigation.navigate("Game", { homeTeam, awayTeam });
            }}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start"
  },
  imgRow: {},
  row: {
    marginBottom: 40,
    padding: 20,
    width: SCREEN_WIDTH - 1
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
