/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

export default function ActionCard() {
    function openWebsite(websiteLink : string) {
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            What's New in JS21 - ES12
        </Text>
        </View>
        <Image source={{ uri:'https://unsplash.com/photos/f77Bh3inUpE/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk1NjgyMjQxfA&force=true'}} 
         style={styles.cardImage}/>
         
         <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Some Text here 
            </Text>
         </View>
        
         <View style={styles.footerContainer}>
            <TouchableOpacity  onPress={() => openWebsite('https://blog.learncodeonline.in/')}>
                <Text style={styles.socialLink}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> openWebsite('https://www.instagram.com/anmol.lucifer')}>
              <Text style={styles.socialLink}>Follow Me</Text>
            </TouchableOpacity>

         </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal: 8,
    },
    card:{ 
      height: 360,
      borderRadius: 6,
      marginVertical: 10,
      marginHorizontal: 10,
    },
    elevatedCard:{
      backgroundColor: '#4C4B4B',
      elevation : 3,
      shadowOffset : {
        width:1, 
        height:2, 
      }, 
      shadowColor:'#333',
      shadowOpacity : 0.5,


    },
    headingContainer:{
      height: 40,
      flexDirection: 'row',
      justifyContent : 'center',
      alignItems: 'center'
    },
    headerText:{
      color :'#ffffff', 
      fontSize: 16,
      fontWeight: '600'
    },
    cardImage:{
        height:200,
        marginBottom:20,
    },
    bodyContainer:{
      padding:10,

    },
    footerContainer:{
      padding:10,
      flexDirection: 'row', //to make the text direction horizontal or vertical.
      alignContent:'center',
      justifyContent: 'space-evenly'


    },
    socialLink:{
      fontSize: 16,
      color:'#ffffff',
      backgroundColor: '#000000',
      paddingHorizontal: 20,
      paddingVertical : 4,
      borderRadius:6,

    },

})