import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'native-base'
import { GlobalStyles, Colors } from '@helpers'

export default function TeknoContainer(props) {
  return (
    <>
     <StatusBar backgroundColor={Colors.light_white}
                barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light_white }}>
                <View style={[GlobalStyles.mainView, props.customStyles]} >
                    {
                        props.children
                    }
                </View>
            </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    safeAreaContainer :{
        //flex:1,
        backgroundColor:Colors.light_white
    }
})