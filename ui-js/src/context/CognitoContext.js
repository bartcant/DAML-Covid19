import React from "react";
import {
  AuthenticationDetails,
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  CognitoUserSession,
} from "amazon-cognito-identity-js";
import { POOL_DATA } from "./../config";



async function cognitoLogIn(username, password) {
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



async function cognitoSignUp(username, password, callback) {
    const userPool = new CognitoUserPool(POOL_DATA);

    var attributeList = [];

    userPool.signUp(username, password, attributeList, null, function(
        err,
        result
    ) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return callback(null);
        }
        var cognitoUser = result.user;
        console.log('[cognitoSignUp] user name is ' + cognitoUser.getUsername());
        callback(cognitoUser);
    });
}


export { cognitoLogIn, cognitoSignUp };