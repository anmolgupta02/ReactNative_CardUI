import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>🔥</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 8
    }, 
    container:{
      padding: 8,
    },
    card :{
      flex:1,
      margin:8,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      borderRadius: 4,
    }, 
    cardElevated: {
      backgroundColor:'#6ab04c',
      elevation: 4,
      shadowOffset: {
        width:1, 
        height: 1,
      },
      shadowColor:'#BB2CD9',
      shadowRadius: 4,
    },
    

})

export default ElevatedCards