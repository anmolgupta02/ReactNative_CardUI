/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]} >
        <Image source={{
            uri:'https://unsplash.com/photos/_jfejQo2tZw/download?ixid=M3wxMjA3fDF8MXxhbGx8MTF8fHx8fHwyfHwxNjk1NTk2NDYxfA&force=true'
        }} style={styles.imageStyle} />

        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Sand Dunes</Text>
            <Text style={styles.cardLable}>Somewhere Beautiful</Text>
            <Text style={styles.cardDesc}>Some Description</Text>
            <Text style={styles.cardFooter}>Some Footer info</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 8
  },
  card:{},
  cardElevated:{},
  imageStyle:{
    height:200,
    width:400,
  },
  cardBody:{

  },
  cardTitle:{},
  cardDesc:{},
  cardLable:{},
  cardFooter:{},
});
