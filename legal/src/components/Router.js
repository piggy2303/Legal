import React, { Component } from 'react';
import {TabNavigator, StackNavigator} from "react-navigation";

import Home from './Home/index';
import Home1 from './Home/Home1';


import Compare from './Compare/index';


import History from './History/index';




export const StackHome = StackNavigator({
  StackHome:{
    screen: Home
  },
  Home1:{
    screen: Home1
  }
})

export const Tabbar = TabNavigator({
  Home:{
    screen: StackHome
  },
  Compare:{
    screen: Compare,
  },
  History:{
    screen: History,
  },
},
{
  tabBarPosition: 'bottom',

})