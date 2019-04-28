import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class HomeTabBarIcon extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={{...style.label, color:this.props.focused ? Colors.homeNavigationSelected : Colors.homeNavigationText}}>{this.props.label}</Text>
        <Text style={{...style.accent, color:this.props.focused ? Colors.homeNavigationSelected : Colors.homeNavigationText}}>・</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  label: {
    flex:1,
    width:'100%',
    flexWrap: 'wrap',
    fontSize: 13,
    fontWeight:'bold',
    marginBottom:-18,
  },
  accent: {
    marginTop: 0,
    fontSize: 40,
  }
})