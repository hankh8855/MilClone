import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Colors from '../constants/Colors';

export default class TodayBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>오늘의 책</Text>
        <Text style={styles.subtitle}>30대에 1억을 만드는 라이프 스타일</Text>
        <View style={styles.bookCover}>
          <Image style={styles.image} source={{uri:'https://gpbqopmikmnr903351.cdn.ntruss.com/23000k_24000k/7398c2f5f9c18debfeecde6bbc2b5937.jpg?type=w&w=200&extopt=3&quality=100'}}/>
        </View>
        <Text style={styles.author}>김나연(요니나)</Text>
        {/* <View style={styles.quotation}>
          <Text style={styles.quotationText}>“</Text>
          <Text style={styles.quotationText}>”</Text>
        </View> */}
        <Text style={styles.content}>가계부는 돈을 모아주는 것이 아니라</Text>
        <Text style={styles.content}>필요한 곳에 잘 쓸 수 있게 도와주는 것이다</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.todayBookBackground,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.todayBookText,
    marginTop: 20,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.todayBookText,
  },
  bookCover: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    shadowColor:'black',
    shadowRadius: 3,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
  },
  image: {
    width: 110,
    height: 158,
  },
  author: {
    color: Colors.todayBookText,
    marginBottom: 10,
  },
  quotation: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  quotationText: {
    color: Colors.quotation,
    fontSize: 40,
    opacity: 0.8,
  },
  content: {
    color: Colors.todayBookText,
    fontSize: 18,
  }
})