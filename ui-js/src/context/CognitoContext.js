// import React from "react";
import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
//   CognitoUserSession,
} from "amazon-cognito-identity-js";
import { POOL_DATA, isUserPoolAuth } from "./../config";



async function cognitoLogIn(username, password) {

    if (!isUserPoolAuth) return "skip coginto";

    const userPool = new CognitoUserPool(POOL_DATA);

    var authenticationData = {
        Username: username,
        Password: password,
    };
    var authenticationDetails = new AuthenticationDetails(
        authenticationData
    );

    var userData = {
        Username: username,
        Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);

    function authenticateUser(){
        return new Promise((resolve, reject) => {
            cognitoUser.authenticateUser(authenticationDetails, {
                onSuccess: function(result) {
                    var accessToken = result.getAccessToken().getJwtToken();
                    console.log("[cognitoLogIn] success", accessToken);
                    resolve(accessToken);
                },
                onFailure: function(err) {
                    console.log("[cognitoLogIn] failed", err.message);
                    resolve(null);
                },
                mfaRequired: function(codeDeliveryDetails) {
                    console.log("[cognitoLogIn] mfaRequired", codeDeliveryDetails);
                    // MFA is required to complete user authentication.
                    // Get the code from user and call
                    // cognitoUser.sendMFACode(mfaCode, this);
                    resolve(codeDeliveryDetails);
                },
                newPasswordRequired: function(userAttributes) {
                    console.log("[cognitoLogIn] newPasswordRequired", userAttributes);
                    resolve(userAttributes);
                }
            });
        });
    }

    var token = await authenticateUser();
    return token;
}


function cognitoSignUp(username, callback) {

    if (!isUserPoolAuth) return callback("skip coginto");

    // default password
    const password = '1qazXSW@';

    const userPool = new CognitoUserPool(POOL_DATA);

    var attributeList = [];
    var dataEmail = {
        Name: 'email',
        Value: 'test@email.com',
    };
    // var dataPhoneNumber = {
    //     Name: 'phone_number',
    //     Value: '+15555555555',
    // };
    var attributeEmail = new CognitoUserAttribute(dataEmail);
    // var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    attributeList.push(attributeEmail);
    // attributeList.push(attributePhoneNumber);

    userPool.signUp(username, password, attributeList, null, function(
        err,
        result
    ) {
        if (err) {
            console.log(err.message || JSON.stringify(err));
            return callback(null);
        }
        var cognitoUser = result.user;
        console.log('[cognitoSignUp] user name is ' + cognitoUser.getUsername());
        callback(cognitoUser);
    });
}


function changePassword(username, oldPassword, newPassword, callback) {

    if (!isUserPoolAuth) return callback("skip coginto");
    
    const userPool = new CognitoUserPool(POOL_DATA);

    var userData = {
        Username: username,
        Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);

    cognitoUser.changePassword(oldPassword, newPassword, function(err, result) {
        if (err) {
            console.log(err.message || JSON.stringify(err));
            return;
        }
        console.log('[changePassword]' + result);
    });
}

export { cognitoLogIn, cognitoSignUp, changePassword };