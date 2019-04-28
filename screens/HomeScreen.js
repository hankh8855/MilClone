import React from 'react';
import { StyleSheet, View } from 'react-native';
import {HomeNavigator} from '../navigation/AppNavigator';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View>
          {/* <HomeNavigator /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
  },
})