import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AdsScreen extends React.Component {
  static navigationOptions = {
    title: '밀리',
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