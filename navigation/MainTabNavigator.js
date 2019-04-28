import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import SearchScreen from '../screens/SearchScreen';
import MyLibraryScreen from '../screens/MyLibraryScreen';
import SettingScreen from '../screens/SettingScreen';
import HomeTabNavigator from './HomeTabNavigator';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})
HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      label={'홈'}
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-home' : 'md-home'
      }
    />
  ),
}

const SearchStack = createStackNavigator({
  Search: SearchScreen,
})
SearchStack.navigationOptions = {
  tabBarIcon:({focused}) => (
    <TabBarIcon 
      label={'검색'}
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-search' : 'md-search'
      }
    />
  )
}

const FeedbackStack = createStackNavigator({
  Feedback: FeedbackScreen,
})
FeedbackStack.navigationOptions = {
  tabBarIcon: ({focused}) => (
    <TabBarIcon 
      label={'피드'}
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-paper' : 'md-paper'
      }
    />
  )
}

const MyLibraryStack = createStackNavigator({
  MyLibrary: MyLibraryScreen,
})
MyLibraryStack.navigationOptions = {
  tabBarIcon:({focused}) => (
    <TabBarIcon
      label={'내서재'}
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-filing' : 'md-filing'
      }
    />
  )
}

const SettingStack = createStackNavigator({
  Setting : SettingScreen,
})
SettingStack.navigationOptions = {
  tabBarIcon:({focused}) => (
    <TabBarIcon
      label={'관리'}
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-person' : 'md-person'
      }
    />
  )
}
export default createMaterialTopTabNavigator ({
    HomeStack:{
      screen: HomeTabNavigator,
    },
    SearchStack,
    FeedbackStack,
    MyLibraryStack,
    SettingStack,
  },
  {
    
    animationEnabled: false,
    tabBarOptions:{
      indicatorStyle: {
        backgroundColor: Colors.navigationBackground
      },
      showIcon: true,
      showLabel: false,
      labelStyle: {
        color: Colors.navigationText,
        fontSize: 11,
      },
      tabStyle: {
        height: 52,
      },
      style: {
        marginTop:22,
        backgroundColor: Colors.navigationBackground
      }
    },
})