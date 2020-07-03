import React from "react";
import { createToken, dablLoginUrl } from "../config";

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

   /* const getRole = async () => {
      try {
        const assets = await post('/v1/query', {
          body:  [Main:Citizen],  "query" : "citizen: daml.party"})
         
         })
        }};
      const roletype = assets.contracts.map(c => c.payload.roletype)

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
