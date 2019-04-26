import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Ads extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <View>
        <Text>ads</Text>
      </View>
    );
  }
}

const styles = StyleSheet.creat({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})