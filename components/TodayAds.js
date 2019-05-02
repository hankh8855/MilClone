import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { adEntries} from '../constants/TodayAdsEntries';
import Layout from '../constants/Layout'
import Colors from '../constants/Colors';

export default class TodayAds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activateSlideIndex: 1
    }
  }
  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
          <Image source={{uri: item.illustration}} style={styles.img}></Image>
        </View>
    );
  }
  
  render() {
    return (
      <View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={adEntries}
          renderItem={this._renderItem}
          sliderWidth={Layout.window.width}
          itemWidth={Layout.window.width}
          loop={true}
          onSnapToItem={(index) => this.setState({activateSlideIndex: index + 1})}
          autoplay={true}
          autoplayInterval={3000}
        />
        <View style={styles.pagination}>
          <Text style={styles.paginationText}> 
            <Text style={styles.paginationCurrentText}>{`${this.state.activateSlideIndex}`}</Text>{` / ${adEntries.length} ＞`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: Layout.window.width,
    flex:1
  },
  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 10,
    width: 100,
    height: 40,
    backgroundColor: Colors.paginationBackground,
    borderRadius: 30,
    justifyContent: 'center'
  },
  paginationText: {
    color: Colors.paginationText,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500'
  },
  paginationCurrentText: {
    fontWeight: '900'
  }
})