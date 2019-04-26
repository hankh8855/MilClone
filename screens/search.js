import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Search extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return (
      <View>
        <Text>search</Text>
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