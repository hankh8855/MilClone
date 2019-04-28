import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import HomeTabBarIcon from '../components/HomeTabBarIcon';
import TodayScreen from '../screens/home/TodayScreen';
import ReadingBookScreen from '../screens/home/ReadingBookScreen';
import BookClubScreen from '../screens/home/BookClubScreen';
import PickScreen from '../screens/home/PickScreen';
import PlusScreen from '../screens/home/PlusScreen';

const TodayStack = createStackNavigator({
  Today: TodayScreen,
})

TodayStack.navigationOptions = {
  tabBarIcon:({focused}) => (
    <HomeTabBarIcon 
      label={'Today'}
      focused={focused}
    />
  )
}

const ReadingBookStack = createStackNavigator({
  ReadingBook: ReadingBookScreen,
})

ReadingBookStack.navigationOptions = {
  tabBarIcon:({focused}) => (
    <HomeTabBarIcon 
      label={'리딩북'}
      focused={focused}
    />
  )
}

const BookClubStack = createStackNavigator({
  BookClub: BookClubScreen,
})

BookClubStack.navigationOptions = {
  tabBarIcon:({focused}) => (
    <HomeTabBarIcon 
      label={'북클럽'}
      focused={focused}
    />
  )
}

const PickStack = createStackNavigator({
  Pick: PickScreen,
})

PickStack.navigationOptions = {
  tabBarIcon:({focused}) => (
    <HomeTabBarIcon 
      label={'Pick'}
      focused={focused}
    />
  )
}

const PlusStack = createStackNavigator({
  Plus: PlusScreen,
})

PlusStack.navigationOptions = {
  tabBarIcon:({focused}) => (
    <HomeTabBarIcon 
      label={'Plus'}
      focused={focused}
    />
  )
}

export default createMaterialTopTabNavigator ({
    TodayStack,
    ReadingBookStack,
    BookClubStack,
    PickStack,
    PlusStack,
  },
  {
    tabBarOptions:{
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        backgroundColor: Colors.navigationBackground,
      },
      labelStyle:{
        color: Colors.homeNavigationText,
      },
      style: {
        backgroundColor: Colors.navigationBackground,
      },
    },
})