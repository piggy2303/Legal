import React, { Component } from 'react';
import {  View, Text, TouchableOpacity} from 'react-native';

export default class Home1 extends Component {
    render() {
        return (
        <View>
            <Text> Home1 </Text>
            <Text> {this.props.navigation.state.params.thamso} </Text>
            
        </View>
        );
  }
}
