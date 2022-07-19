import { Animated, LogBox, StyleSheet, Text, View, Easing } from 'react-native'
import { requestInit } from '@actions';
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const animatedValue = new Animated.Value(0);
const SplashScreen = (props) => {
    const navigateToMain = () => {
        let navTo = setTimeout(() => props.loadApplication &&
            props.navigation.reset({
                index: 0,
                routes: [{ name: props.navScreen }]
            }), 300)

        return () => {
            clearTimeout(navTo);
        };
    }

    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
          
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
            useNativeDriver: true, // Add this line

        }).start();

        let loadApp = setTimeout(() => props.requestInit(), 1500);

        return () => {
            clearTimeout(loadApp);
        };
    }, [

        navigateToMain()

    ]);
    


  return (
    <View>
     
      <Animated.Text style={{
                    position: 'absolute',
                    left: wp('15%'),
                    top: hp('15%'),
                    transform: [
                        {
                            translateX: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 15]
                            })
                        },
                        {
                            translateY: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 100]
                            })
                        },
                        {
                            scaleX: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 8]
                            })
                        },
                        {
                            scaleY: animatedValue.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 10]
                            })
                        }
                    ]
                }}>
TeknoCtrl
      </Animated.Text>
    </View>
  )
}

const mapStateToProps = (state) => ({
    loadApplication: state.mainScreenInit.loadApp,
    navScreen: state.mainScreenInit.navScreen
});


export default connect(mapStateToProps , {requestInit})(SplashScreen);

const styles = StyleSheet.create({})