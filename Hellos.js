import React, { Component } from 'react';
import { Text, View, StyleSheet, AppRegistry, Button } from 'react-native';

export default class Hellos extends Component {
    static navigationOptions = {
        title: 'Hellos',
    };
    render() {
        return (
        <View style={styles.container}>
            <Text>Hello world!</Text>

            <Greeting name='Rexxar' />
            <Greeting name='Jaina' />
            <Greeting name='Valeera' />

            <Button title="Go to Bananas" 
            onPress= {() => this.props.navigation.navigate('Bananas')} />
        </View>
        );
    }
}

class Greeting extends Component {
    render() {
    return (
        <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


// skip this line if using Create React Native App
AppRegistry.registerComponent('HelloWorldRN', () => Hellos);
  