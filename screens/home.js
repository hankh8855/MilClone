import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <View>
        <Text>home</Text>
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