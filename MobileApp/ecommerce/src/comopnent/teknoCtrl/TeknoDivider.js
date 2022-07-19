import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function TeknoDivider(props) {
    let size = "1%" // Default size
    if(props.size == "md"){
        size = "3%"
    }else if(props.size == "lg"){
        size = "4%"
    }else if(props.size == "xl"){
        size = "5%"
    }
  return (
    <View  style={{height:hp(size)}}/>
  )
}

const styles = StyleSheet.create({})