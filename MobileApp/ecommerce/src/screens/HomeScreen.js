import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { heart, offerBanner, avatarImg, avatarImg2 } from '@common';
import {
    TeknoContainer,  TeknoContent, SearchBar, CategoryView
} from '@component';
import Colors from '../helpers/Colors'
import TeknoDivider from '../comopnent/teknoCtrl/TeknoDivider';
import HomeSlider from '../comopnent/home/HomeSlider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { borderRadius } from 'styled-system';
import { apiLink, apiMethot, getApiData } from '../helpers/ApiAddresses';
export default function HomeScreen(props) {

   
    
    return (
      
            <TeknoContainer  customStyles={{ backgroundColor: Colors.white }}>
                <TeknoContent customStyles={{ backroundColor:  Colors.white}}>
                    <SearchBar navigation={props.navigation} />
                    <CategoryView  navigation={props.navigation} />
                    <TeknoDivider />
                    <HomeSlider />
                    <TeknoDivider/>
                    <Image source={offerBanner} borderRadius={50} style={styles.bannerStyle} /> 
                    <TeknoDivider/>
          
                    
                
                 
                </TeknoContent>
            </TeknoContainer>




      
    )
}

const styles = StyleSheet.create({
    bannerStyle: {
        resizeMode: 'cover',
        width: wp('90%'),
        height: hp('16%'),
        alignSelf: 'center',
        borderRadius:5
    },
})