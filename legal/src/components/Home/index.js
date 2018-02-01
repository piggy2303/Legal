import React, { Component } from 'react';
import { View, Text, TouchableOpacity,  } from 'react-native';

 export default class Home extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home1',{thamso: 'hello'})}} >
          <Text>sdf</Text>
        </TouchableOpacity>
      </View>
    );
  }
}