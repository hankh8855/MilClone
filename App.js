import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
        {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
