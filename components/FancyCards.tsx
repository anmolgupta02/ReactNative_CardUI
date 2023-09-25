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
    paddingHorizontal: 8,
  },
  card:{
    height: 350,
    borderRadius: 20,
    marginVertical: 12,
    marginHorizontal: 10,
  },
  cardElevated:{
    backgroundColor:'#000000',
    elevation :3,
    shadowOffset:{
        height:1,
        width:1,
    },

  },
  imageStyle:{
    marginBottom:8,
    height:200,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,

  },
  cardBody:{
    flex: 1,
    flexGrow:1,
    paddingHorizontal:12,
  },
  cardTitle:{
    color:'#FFFFFF',
    fontSize:20,
    fontWeight: 'bold',
    marginBottom: 4,

  },
  cardDesc:{
    color:'#FFFFFF',
    fontSize : 14,
    marginBottom:16,
    flexShrink:1,
  },
  cardLable:{
    color:'#FFFFFF',
    fontSize:16,
     marginBottom:4,
  },
  cardFooter:{
    color:'#FFFFFF',
  },
});
