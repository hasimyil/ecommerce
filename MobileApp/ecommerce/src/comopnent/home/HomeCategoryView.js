import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { GlobalStyles } from '../../helpers/GlobalStyles';
import TeknoDivider from '../teknoCtrl/TeknoDivider';
import CategoryDummy from '../items/CategoryDummy'
import Colors from '../../helpers/Colors';
import Fonts from '../../helpers/Fonts';
import { apiLink, apiMethot, getApiData } from '../../helpers/ApiAddresses';

export default function HomeCategoryView(props) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()


  }, [])

  const fetchCategories = async () => {
    const response = await getApiData(apiMethot.get, apiLink.getAllCategories);

    setCategories(response.data); //Setting the response into state
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={GlobalStyles.boxHeading}>Categories</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('CategoryScreen')}>
          <Text style={GlobalStyles.viewAll} >View All</Text>
        </TouchableOpacity>
      </View>
      <TeknoDivider size={"sm"} />
      <FlatList
        data={categories}
        keyExtractor={(contact, index) => String(index)}
        horizontal={true}
        style={{ padding: wp("1%") }}
        contentContainerStyle={{ paddingRight: wp("3%") }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) =>
          <TouchableOpacity style={styles.categoryContainer} key={item.id} onPress={() => props.navigation.navigate('CategoryScreen')}>
            <View style={styles.imageContainer}>
              {
                console.log(item.image)
              }
            <Image
                style={styles.image}
                source={{
                  uri: item.image,
                }}
              />

            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        }
      >

      </FlatList>

 
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: hp("1%")

  },
  imageContainer: {
    backgroundColor: Colors.light_white,
    height: hp('7..5%'),
    borderRadius: 5
  },
  categoryContainer: {
    height: hp('12.5%'),
    width: wp('25%'),
    marginHorizontal: wp('1%'),
    borderRadius: 5,

  },
  image: {
    resizeMode: 'cover',
    alignItems: "center",
    height: hp('7..5%'),
    borderRadius: 5


  },
  title: {
    textAlign: "center",
    fontSize: 12,
    color: Colors.text_color
  },
  tinyLogo: {
    resizeMode: 'cover',
    alignItems: "center",
 
    height: hp('7..5%'),
    borderRadius: 5
  },


})