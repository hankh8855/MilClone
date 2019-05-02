import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WhiteSpace} from '../../components/WhiteSpace'
import TodayAds from '../../components/TodayAds';
import TodayBook from '../../components/TodayBook';

export default class TodayScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeAds}>
          <TodayAds />
          <WhiteSpace />
          <TodayBook />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  homeAds: {
    flex: 0.36,
  }
})