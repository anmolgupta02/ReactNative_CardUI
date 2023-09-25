/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

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
                <Text style={styles.socialLink}>Read More!!</Text>
            </TouchableOpacity>
         </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{

    },
    card:{},
    elevatedCard:{},
    headingContainer:{},
    headerText:{},
    cardImage:{
        height:200,
        marginBottom:20,
    },
    bodyContainer:{},
    footerContainer:{},
    socialLink:{},

})