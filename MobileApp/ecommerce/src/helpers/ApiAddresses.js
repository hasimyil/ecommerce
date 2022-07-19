import React from 'react';
import {Platform} from 'react-native';
import axios from 'axios';



const apiAdress = {
    prod: 'http://localhost:8080/api/v1/',
    dev: 'http://localhost:8080/api/v1/',
    test: 'http://localhost:8080/api/v1/',
    // debug: 'http://localhost:8080/api/v1/',
    debug: 'http://172.17.0.1:8080/api/v1/',
};

export const apiLink = {
    getAllCategories: 'category',
    getCat: (documentToSignId) => {
        return 'Document/Pdf/Filled/' + documentToSignId;
    },
    documentPdfSigned: (documentToSignId) => {
        return 'Document/Pdf/Signed/' + documentToSignId;
    },
    documentReviewGet: (documentToSignId) => {
        return 'Document/Review/' + documentToSignId;
    },
    documentReviewSend: 'Document/Review',
    documentSendToSign: 'Document/SendToSign',
    documentSign: (documentToSignId, signerUserHash) => {
        return 'Document/Sign/' + documentToSignId + '/' + signerUserHash;
    },
    feedbackCrash: 'Feedback/Crash/',
    feedbackFeedback: 'Feedback/Feedback',
    language: (languageCode) => {
        return 'Language/' + languageCode;
    },
    languageActiveLanguages: 'Language/ActiveLanguages',
    otpSend: 'Otp/Send',
    otpValidate: 'Otp/Validate',
    package: 'Package',
    parameterGeneralParameters: 'Parameter/GeneralParameters',
    parameterVersion: 'parameter/version',
    participant: 'Participant',
    participantCheck: 'Participant/Check',
    participantNewInbox: (userHash) => {
        return 'Participant/New/Inbox/' + userHash;
    },
    participantNotificationParticipant: (userRowGuid) => {
        return 'Participant/Notification/Participant/' + userRowGuid;
    },
    participantNotificationRead: (notificationGuid) => {
        return 'Participant/Notification/Read/' + notificationGuid;
    },
    participantPasswordForgot: 'Participant/Password/Forgot/',
    participantValidateUser: 'Participant/ValidateUser/',
    purchaseRequest: 'Purchase/Request',
    purchaseCheck: (conversationId) => {
        return 'Purchase/Check/' + conversationId;
    },
    token: 'Token/',
};

export const apiMethot = {
    get: 'get',
    post: 'post',
    put: 'put',
};

const getEnvironmentLink = (environment) => {
    switch (environment) {
        case 'prod':
            return apiAdress.prod;
        case 'dev':
            return apiAdress.dev;
        case 'debug':
            return apiAdress.debug;
        default:
            return apiAdress.test;
    }
};

export const getEnvironmentColor = () => {
   //const state = store.getState();
   const environment = "debug" //state.ReducerParameter.environment;

    switch (environment) {
        case 'test':
            return 'darkorange';
        case 'debug':
            return 'green';
        case 'dev':
            return 'red';
        default:
            return componentBackground;
    }
};

export const getTokenWithApiKey = async () => {
   //const state = store.getState();
   const environment = "debug" //state.ReducerParameter.environment;

    const environmentLink = getEnvironmentLink(environment);
    let url = environmentLink + apiLink.token;

    let result = null;

    await axios.post(url, getApiKeyJson(), null)
        .then((response) => {
            if (response.data) {
                result = response.data.token;
            } else {
                result = {code: -1, error: 'Error (' + response.data.status + '): ' + response.data.message};
            }
        })
        .catch(async (error) => {
            result = error;
            await sendFeedBack(error, 'ApiAddresses.js', 72);
        });

    return result;
};

export const getApiData = async (methot, link, body = null, token = null) => {
    //const state = store.getState();
    const environment = "debug" //state.ReducerParameter.environment;
    const user = null//state.ReducerApiData.user;

    const environmentLink = getEnvironmentLink(environment);
    let url = environmentLink + link;
   
    let result = null;

    let config = null;
    if (user && user.token) {
        config = getHeaderJson(user.token);
    } else if (token && token.length > 0) {
        config = getHeaderJson(token);
    } else if (!body) {
        body = getApiKeyJson();
        config = null;
    }

    switch (methot) {
        case apiMethot.put:
            await axios.put(url, body, config)
                .then((response) => {
                    if (environment !== 'prod') {
                        console.log(response.data, environment, url);
                    }
                    if (response.data && response.data.code >= 200) {
                        result = response.data;
                    } else {
                        result = {code: -1, error: 'Error (' + response.data.status + '): ' + response.data.message};
                    }
                })
                .catch(async (error) => {
                    if (environment !== 'prod') {
                        console.log('getApiData -> apiMethot.put -> error', error);
                    }
                    result = error;
                    await sendFeedBack(error, 'ApiAddresses.js', 101);
                });
            break;
        case apiMethot.get:
            await axios.get(url, config)
                .then((response) => {
                    
                    if (environment !== 'prod') {
                        console.log(response.data, environment, url);
                    }
                    if (response.data && response.data.code >= 200) {
                        result = response.data;
                    } else {
                        result = {code: -1, error: 'Error (' + response.data.status + '): ' + response.data.message};
                    }
                })
                .catch(async (error) => {
                    if (environment !== 'prod') {
                        console.log('getApiData -> apiMethot.get -> error', error);
                    }
                    result = error;
                    await sendFeedBack(error, 'ApiAddresses.js', 101);
                });
            break;
        case apiMethot.post:
            await axios.post(url, body, config)
                .then((response) => {
                    if (environment !== 'prod') {
                        console.log(response.data, environment, url);
                    }
                    if (response.data && response.data.code >= 200) {
                        result = response.data;
                    } else {
                        result = {code: -1, error: 'Error (' + response.data.status + '): ' + response.data.message};
                    }
                })
                .catch(async (error) => {
                    if (environment !== 'prod') {
                        console.log('getApiData -> apiMethot.post -> error', error);
                    }
                    result = error;
                    await sendFeedBack(error, 'ApiAddresses.js', 125);
                });
            break;
    }

    return result;
};

export const sendFeedBack = async (error, pageName, line) => {
    const state = null// store.getState();
    const user = null //state.ReducerApiData.user;
    const errorDataObject = {
        participant_guid: user === null ? 'unauthenticated-user' : user.row_guid,
        exception: error.message,
        exception_time: new Date().toLocaleString(),
        platform: Platform.OS,
        pageName,
        line,
        application_name: 'com.mesnet.mespact',
    };
    await axios.post(apiLink.feedbackCrash, errorDataObject, getHeaderJson(getTokenWithApiKey()))
        .catch((error) => {
            //console.log('Api feedback error: ' + error.message);
        });
};

export const getHeaderJson = (token) => {
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    };
};

export const getApiKeyJson = () => {
    const state = null //store.getState();
    const languageCode = "en";//state.ReducerParameter.languageCode;
    return {
        api_key: 'CFA37D533B5EC4D5E92D2EB94171079B',
        language: languageCode,
    };
};