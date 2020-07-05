import React from "react";
import { createToken, dablLoginUrl } from "../config";
import { CitizenRole } from "@daml2js/Covid19-0.0.1/lib/Main";

var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true, token: action.token, party: action.party, role: action.role };
    case "LOGIN_FAILURE":
      return { ...state, isAuthenticated: false };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  const party = localStorage.getItem("daml.party")
  const token = localStorage.getItem("daml.token")
  const role = localStorage.getItem("daml.role")



  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!token,
    token,
    party,
    role
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}




function loginUser(dispatch, party, userToken, history, setIsLoading, setError) {
  setError(false);
  setIsLoading(true);

  if (!!party) {
    const token = userToken || createToken(party)
    localStorage.setItem("daml.party", party);
    localStorage.setItem("daml.token", token);
  
    // Role is retrieved from party Name
    const role = localStorage.getItem("daml.party",party)
    localStorage.setItem("daml.role", role);

    // Role is retrieved from DAML Contract
   
    // NEW CODE HERE TO RETRIEVE ROLE FROM CITIZEN (Role data element)

    /* const fetchUpdate = async () => {
      try {
        const contractResponse = await post('/v1/query', {
          body: {
            "templateIds": ["Main:CitizenInvitation"],
            "query" : {"citizen" : "Alice"}
                 }
         });
        
         const citizenContractResponse = await contractResponse.json();
         const assets = citizenContractResponse.contracts.map(c => c.payload.roletype);
         const roletype = JSON.stringify (assets);
         console.log ("Roletype : " + roletype);
        
      }
      catch(err) {
        alert("Something went wrong");
      }
    };  */


    // Sample code from another project called dablechat - https://github.com/digital-asset/dablchat
      /* const fetchUpdate = async () => {
        try {
          const allContractsResponse = await post('/v1/query', {
            body: JSON.stringify({ 'templateIds': [
              CHAT_TEMPLATE,
              MESSAGE_TEMPLATE,
              USER_TEMPLATE,
              ADDRESS_BOOK_TEMPLATE,
              SELF_ALIAS_TEMPLATE
            ] })
          });
    
          const allPublicContractsResponse = await postPublic('/v1/query', {
            body: JSON.stringify({ 'templateIds': [
              SELF_ALIAS_TEMPLATE
            ] })
          });
    
          const allContracts = await allContractsResponse.json();
    
          const chats = allContracts.result.filter(c => c.templateId.endsWith(CHAT_TEMPLATE));
          const messages = allContracts.result.filter(m => m.templateId.endsWith(MESSAGE_TEMPLATE));
          const user = allContracts.result.find(u => u.templateId.endsWith(USER_TEMPLATE));
          const selfAlias = allContracts.result.find(ma => ma.templateId.endsWith(SELF_ALIAS_TEMPLATE));
          const addressBook = allContracts.result.find(ma => ma.templateId.endsWith(ADDRESS_BOOK_TEMPLATE));
 */

  

    dispatch({ type:"LOGIN_SUCCESS", token, party, role });
    console.log ("role" + role);
    setError(null);
    setIsLoading(false);

    history.push("/app");
  } else {
    dispatch({ type: "LOGIN_FAILURE" });
    setError(true);
    setIsLoading(false);
  }
}

const loginDablUser = () => {
  window.location.assign(`https://${dablLoginUrl}`);
}

function signOut(event, dispatch, history) {
  event.preventDefault();
  localStorage.removeItem("daml.party");
  localStorage.removeItem("daml.token");
    // remove rand state
  localStorage.removeItem("daml.role");

  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}

export { UserProvider, useUserState, useUserDispatch, loginUser, loginDablUser, signOut };
