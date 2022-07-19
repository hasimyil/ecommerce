import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    TeknoContainer,  TeknoContent, SearchBar
} from '@component';
import TeknoHeader from '../comopnent/teknoCtrl/TeknoHeader';
import { GlobalStyles } from '../helpers/GlobalStyles';
import CategoryView from '../comopnent/CategoryView';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../helpers/Colors';
export default function CategoryScreen(props) {
  return (
    <TeknoContainer>
        <TeknoHeader>
            <View style={[GlobalStyles.headerCenter, {flex:0.9}]}>
                <Text style={GlobalStyles.headingTxt}>
                    Categories
                </Text>
            </View>
        
        </TeknoHeader>
        <TeknoContent>
                <CategoryView navigation={props.navigation} />
            </TeknoContent>
    </TeknoContainer>
  )
}

const styles = StyleSheet.create({
    categoryBox: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('25%'),
        width: wp('43%'),
        maxWidth: wp('44%'),
        marginHorizontal: wp('1.8%'),
        flex: 0.5,
        backgroundColor: Colors.white,
        marginBottom: wp('3%'),
        borderRadius: wp('2%'),
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0.4 },
        shadowOpacity: 0.30,
        shadowRadius: 3,
        elevation: 6,
        flexDirection: 'column',

    },
})