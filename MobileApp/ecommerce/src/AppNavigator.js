import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { connect } from "react-redux";
import { HomeScreen, InitialScreen, SplashScreen } from "./screens/index";
import { Platform, StyleSheet, Image, Text, View } from 'react-native';
import React, { useEffect } from "react";
import MainScreen from "./screens/MainScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { _roundDimensions } from "./helpers/util";
import { bottomHome, bottomHomeFill, bottomCategory, bottomCategoryFill, bottomCart, bottomProfile, bottomProfileFill, bottomSetting, bottomSettingFill } from '@common';
import { height } from "styled-system";
import { Badge } from "native-base";
import { GlobalStyles } from "./helpers/GlobalStyles";
import Colors from "./helpers/Colors";
import CategoryScreen from "./screens/CategoryScreen";

const InitialScreenStack = createStackNavigator();

function InitialStackNavigation() {
    return (
        <InitialScreenStack.Navigator initialRouteName="InitialScreen">
            <InitialScreenStack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
        </InitialScreenStack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator();
function MyTabs(props) {
    let cartCount = props.cartCounts;
    let authStatus = props.auth;
    return (
        <BottomTab.Navigator
            initialRouteName="HomeScreen"
            //backBehavior={'order'}
            screenOptions={{
                tabBarStyle: { position: 'absolute' },
                unmountOnBlur: true,
                tabBarShowLabel: false,
                lazy: true,
                tabBarStyle: styles.tabbarStyle
            }}>
            <BottomTab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Image
                            square
                            source={focused ? bottomHomeFill : bottomHome}
                            style={[styles.bottomTabIcon]}
                        />
                    ),
                }} />

            <BottomTab.Screen name="CartScreen" component={MainScreen} options={{
                headerShown: false,
                tabBarIcon: ({ focused, tintColor }) => (
                    <View style={styles.cartIconView}>
                        <Image
                            square
                            source={focused ? bottomCart : bottomCart}
                            style={
                                [styles.bottomTabIcon,
                                {
                                    top: hp('0.3%'),
                                    width: wp("7%"),
                                    right: wp("1%"),
                                    height: wp("7%")


                                }
                                ]
                            }
                        />
                        <Badge style={[GlobalStyles.badge, { backgroundColor: Colors.selectedGreen }]}>
                            <Text style={{ fontSize: 10 }}>1</Text>
                        </Badge>
                    </View>

                )

            }}


            />

            <BottomTab.Screen name="CategoryScreen" component={CategoryScreen}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Image
                            square
                            source={focused ? bottomCategoryFill : bottomCategory}
                            style={[styles.bottomTabIcon]}
                        />
                    ),
                }} />


        </BottomTab.Navigator >
    );
}


const Stack = createStackNavigator();
function AppNavigator(props) {
    const { cardCount, authStatus } = props;
    console.log("NAVIGATORRRR", props.cartCount)
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen {...props} name="MainScreen" options={{ headerShown: false, }} >
                    {props => <MyTabs cartCounts={0} auth={false} />}
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

function mapStateToProps(state) {
    return {
        cartCount: 5,
        authStatus: false
    }
}

export default connect(mapStateToProps, {})(AppNavigator);


const styles = StyleSheet.create({
    bottomTabIcon: {
        height: wp('6%'),
        width: wp('6%'),
    },
    tabbarStyle: {
        backgroundColor: Colors.white,
        height: Platform.isPad === true ? wp('10%') : wp('15%'),
        paddingTop: Platform.isPad == true ? 0 : wp('1%'),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 20,
    },
    cartIconView: {
        backgroundColor: Colors.light_white,
        height: _roundDimensions()._height * 0.068,
        width: _roundDimensions()._height * 0.068,
        borderRadius: _roundDimensions()._borderRadius,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: hp('2.5%'),
    },
    count: {
        backgroundColor: Colors.white,
    },
    countText: {
        color: Colors.link_color,

    }
});