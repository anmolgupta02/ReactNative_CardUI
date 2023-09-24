/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line prettier/prettier
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
        <ScrollView>
      <Text style={styles.headingText}>Flat Cards</Text>
       <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
                <Text>RED</Text>
            </View>
            <View style={[styles.card, styles.cardTwo]}>
                <Text>GREEN</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
                <Text>BLUE</Text>
            </View>
       </View>
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    container:{
        flex: 1,
        flexDirection: 'row',
        padding: 5
    },
    card:{
     //   flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        color: '#FFFFFF',
    },
    cardOne:{
        backgroundColor: '#EF5354'
    },
    cardTwo:{
        backgroundColor: '#50DBB4'
    },
    cardThree:{
        backgroundColor: '#2827CC'
    }
});

export default FlatCards;
