import { call, put, takeEvery } from "redux-saga/effects";
import { types } from "@actions/actionTypes";
import {
    successInt, successCart, successCheckout, authStatus, successWishlist
} from "@actions";
import AsyncStorage from '@react-native-community/async-storage'
import { logfunction, _getLocalCart } from "@helpers/FunctionHelper";
import logger from "redux-logger";

export function* watchGeneralRequest() {
    yield takeEvery(types.REQUEST_INIT, requestInit);
 
}

function* requestInit(action) {
    try {

        console.log("REQUEST ACTION", action)
        // ************** If you want to login based home page then do stuff here ****************
        yield put(successInt('MainScreen'));
        // if (action.payload.userAuth) {
        //     yield put(successInt('HomeScreen'));
        // }
        // else {
        //     yield put(successInt('HomeScreen'));
        // }

        // ************** Else here ****************

        //AsyncStorage.removeItem('IS_AUTH');

        //get local login data
        // let getAuth = yield call(AsyncStorage.getItem, "IS_AUTH")
        // logfunction("IS LODDED ", getAuth)
        // if (getAuth == 1) {
        //     yield put(authStatus(true));
        // }
        // else {
        //     yield put(authStatus(true));
        // }

        // yield put(successInt('MainScreen'));

        //cart count set
        // let getLocalCart = yield call(AsyncStorage.getItem, "CART_DATA")
        // logfunction("LOCAL CART  ", JSON.parse(getLocalCart));
        // getLocalCart = JSON.parse(getLocalCart);
        // if (getLocalCart) {
        //     yield put(successCart(getLocalCart));
        // }

        // //Wishlist count set
        // let getLocalWishlist = yield call(AsyncStorage.getItem, "GET_LOCAL_WISHLIST");
        // logfunction("LOCAL Wishlist  ", JSON.parse(getLocalWishlist));
        // getLocalWishlist = JSON.parse(getLocalWishlist);
        // if (getLocalWishlist) {
        //     let wishData = { totalCount: getLocalWishlist.length, wishlistData: getLocalWishlist }
        //     yield put(successWishlist(wishData));
        // }


    } catch (e) {
        logger(e)
    }
}

