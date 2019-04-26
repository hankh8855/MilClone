import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MyLibraryScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    return (
      <View>
        <Text>MyLibrary</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})