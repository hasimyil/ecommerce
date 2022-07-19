import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TeknoDivider from './teknoCtrl/TeknoDivider'
import CategoryDummy from './items/CategoryDummy'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors } from 'react-native-paper';
import { apiLink, apiMethot, getApiData } from '../helpers/ApiAddresses';
import { borderRadius } from 'styled-system';
export default function CategoryView(props) {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetchCategories()
    
    
      }, [])
    
      const fetchCategories = async () => {
        const response = await getApiData(apiMethot.get, apiLink.getAllCategories);
    
        setCategories(response.data); //Setting the response into state
      };
    return (
        <>

            <TeknoDivider />
            <FlatList
                data={categories}
                keyExtractor={(contact, index) => String(index)}
                contentContainerStyle={{ flex: 1 }}
                scrollEnabled={true}
                numColumns={2}
                horizontal={false}
                renderItem={({ item, index }) =>
                    <TouchableOpacity key={index} style={styles.categoryBox} onPress={() => console.log("Category Clicked")} >
                        <View style={styles.imageView}>
                            <Image source={{uri:item.image}} style={styles.image}/>
                        </View>
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                }

            />
        </>
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
    imageView: {
        flex: 0.90,
        backgroundColor: Colors.ligth_white,
        // backgroundColor: Colors.themeYellow,
        width: wp('36.5%'),
        borderTopStartRadius: wp('2%'),
        borderTopEndRadius: wp('2%'),
        marginTop: hp('1.4%'),
        marginBottom: hp('1%')
    },
    image:{
     resizeMode:'cover',
     width:wp("35%"),
     height:hp("18&"),
     borderRadius:5
    }
})