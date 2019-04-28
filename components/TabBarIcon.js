import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Icon.Ionicons
          name={this.props.name}
          size={20}
          style={style.icon}
          color={this.props.focused ? Colors.navigationSelected : Colors.navigationText}
        />
        <Text style={{...style.label, color:this.props.focused ? Colors.navigationSelected : Colors.navigationText}}>{this.props.label}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 3,
  },
  label: {
    fontSize: 12,
    width:'100%',
  }
})