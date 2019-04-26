import React from 'react';
import {} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Feedback from '../screens/Feedback';
import Search from '../screens/Search';
import MyLibrary from '../screens/MyLibrary';

const HomeStack = createStackNavigator({
  Home: Home,
})

const FeedbackStack = createStackNavigator({
  Feedback: Feedback,
})

const SearchStack = createStackNavigator({
  Search: Search,
})

const MyLibraryStack = createStackNavigator({
  MyLibrary: MyLibrary,
})