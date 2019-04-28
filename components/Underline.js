import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

export const Underline = () => <View style={style.underline} />

const style = StyleSheet.create({
  underline:{
    borderBottomWidth:1.5,
    borderStyle:'solid',
    borderBottomColor:Colors.underline,
  },
})