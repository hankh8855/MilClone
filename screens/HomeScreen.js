import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
      <FlatList style={styles.container}>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
  },

})