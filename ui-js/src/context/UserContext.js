import React from "react";
import { dablLoginUrl } from "../config";
import { cognitoLogIn } from "./CognitoContext";

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




async function loginUser(dispatch, party, userToken, history, setIsLoading, setError) {
  setError(false);
  setIsLoading(true);

  // Local access token
  const token =
    // local environment token
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwczovL2RhbWwuY29tL2xlZGdlci1hcGkiOnsibGVkZ2VySWQiOiJDb3ZpZDE5IiwiYXBwbGljYXRpb25JZCI6ImZvb2JhciIsImFjdEFzIjpbIk9wZXJhdG9yIl0sInJlYWRBcyI6WyJPcGVyYXRvciJdfX0.JklciDh0-GzkvrPkSJ_H3sYX39LFU4C3uVWd7qsMPNo"

  // ProjectDable token for Operator on Ledger ecjcay92kqxdsdpd
  // "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImRhYmwtZGY4NDdlODAtYzVlZS00OTViLThmY2ItMzM0YjdlYjM3OTkyIn0.eyJpc3MiOiJwcm9qZWN0ZGFibC5jb20vbG9naW4iLCJzdWIiOiJhdXRoMHw1ZjVmYTkwNjc1NGRlYTAwNzdjY2M2NDgiLCJleHAiOjE2MDAyMDI1NjksImh0dHBzOi8vZGFtbC5jb20vbGVkZ2VyLWFwaSI6eyJhY3RBcyI6WyJsZWRnZXItcGFydHktMzdlOGIzZjktNjg4Mi00NjEwLTk1NzQtNTY1YmJmYzQzODBlIl0sImFwcGxpY2F0aW9uSWQiOiJEQUJMIiwibGVkZ2VySWQiOiJ4eHc4Y2dxeHI1NzNsOWJ4In0sIm93bmVyIjoidXNlci1ncmFudC05NmRmZmYwMy1hYTE5LTQzNmUtOTQ5NC1kMWI0NWUzMDZkOTAiLCJwYXJ0eU5hbWUiOiJPcGVyYXRvciIsInJpZ2h0cyI6WyJyZWFkIiwid3JpdGU6Y3JlYXRlIiwid3JpdGU6ZXhlcmNpc2UiXX0.mt51NXDQsvRjMKt_CosAcWwSYSI1TZT1COTSrt6k2n45YVcWXPwkLa67cK9P7TypWUSZ0TKV-kcL7QHuxsdZOROsx84jTfQuywR4akxVkDVtt_GEFlsEr-cTDD_1YegRonWPuw9GCBUSQGLuK7up9DoExT9vTzEfKhJw-8rJz3w"

  const headers = {
    "Authorization": `Bearer ${token.toString()}`,
    'Content-Type': 'application/json'
  }

  const siteSubDomain = (path = '/data/') => {
    if (window.location.hostname === 'localhost') {
      return window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }

    let host = window.location.host.split('.')
    const ledgerId = host[0];
    let apiUrl = host.slice(1)
    apiUrl.unshift('api')

    return apiUrl.join('.') + (window.location.port ? ':' + window.location.port : '') + path + ledgerId;
  }

  const post = (url, options = {}) => {
    Object.assign(options, { method: 'POST', headers });

    return fetch('//' + siteSubDomain() + url, options);
  }

  /* const fetchPublicToken = async () => {
    const response = await fetch('//' + siteSubDomain('/api/ledger/') + '/public/token', { method: 'POST' });
    const jsonResp = await response.json();
    const accessToken = jsonResp['access_token'];
    return accessToken;
  } */



  let role = 'Citizen';
  if (!!party) {
    // NEW CODE HERE TO RETRIEVE ROLE FROM CITIZEN (Role data element)

    // let failedStatus = false;
    const fetchUpdate = async () => {
      console.log("insidefetch");
      try {

        const contractResponse = await post('/v1/query', {
          body: JSON.stringify({
            "templateIds": ["Main:PartyInvitation"],
            "query": { "party": party }
          })
        });

        const citizenContractResponse = await contractResponse.json();
        if (citizenContractResponse.status === 200) {
          role = citizenContractResponse.result[0].payload.roletype
          console.log("[fetchUpdate] role", role);
        }
        else {
          role = "Operator";
        }
      }
      catch (err) {
        alert("Something went wrong with roletype");
        role = "Operator";
        // dispatch({ type: "LOGIN_FAILURE" });
        // setError(true);
        // setIsLoading(false);
        // failedStatus = true;
      }
    };

    
    // cognito log in
    let cognitoToken = await cognitoLogIn(party, userToken);
    if (!cognitoToken) {
    
      setError(true);
      setIsLoading(false);
  
      dispatch({ type: "LOGIN_FAILURE" });
      return ;
    }

    console.log("[loginUser] before fetchUpdate", cognitoToken);

    await fetchUpdate();

    // if (failedStatus) return;
    // const token = userToken || createToken(party)
    localStorage.setItem("daml.party", party);
    localStorage.setItem("daml.token", token);

    // Role is retrieved from party Name
    // const role = localStorage.getItem("daml.party",party)
    localStorage.setItem("daml.role", role);

    
    setError(null);
    setIsLoading(false);

    dispatch({ type: "LOGIN_SUCCESS", token, party, role });
    console.log("role : " + role);

    history.push("/app");
  } else {
    
    setError(true);
    setIsLoading(false);

    dispatch({ type: "LOGIN_FAILURE" });
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
