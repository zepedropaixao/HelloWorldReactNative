// In App.js in a new project

import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Hellos from "./Hellos";
import Bananas from "./Bananas";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>

        <Button title="Go To Home"
          onPress={() => this.props.navigation.navigate('Hellos')} />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Hellos: { screen: Hellos },
  Bananas: { screen: Bananas }
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}