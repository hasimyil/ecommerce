import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { GlobalStyles, Colors } from '@helpers'
function TeknoContent(props) {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    scrollEventThrottle={10}
    bounces={false}
    scrollEnabled={true}
    nestedScrollEnabled={true}
    style={[GlobalStyles.contentView, props.customStyles]} >
    {
        props.children
    }
</ScrollView>
  )
}

export default TeknoContent;