import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Dimensions, Platform } from "react-native";
import { GlobalStyles, Colors } from '@helpers'

const { height, width } = Dimensions.get('window');
function TeknoHeader(props) {
    return (
        <View style={[GlobalStyles.tabBarView, props.customStyles]} >
            {
                props.children
            }

        </View>
    )
}

export default TeknoHeader;