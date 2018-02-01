import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home    from './Home/index';
import Compare from './Compare/index';
import History from './History/index';

export const Tabbar = TabNavigator({
  ScreenHome:{
    screen: Home
  },
  ScreenCompare:{
    screen: Compare
  },
  screenHistory:{
    screen: History
  }

});