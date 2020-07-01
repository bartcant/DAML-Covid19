import React, { useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout/Layout";
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";
import { useUserState, useUserDispatch } from "../context/UserContext";
// import redux & store
import { createStore, combineReducers } from "redux";
import { Provider, connect } from 'react-redux';

import rootReducer from '../reducers';

// Store
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  const userState = useUserState();

  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={RootRoute} />
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/report" />}
          />
          <PrivateRoute path="/app" component={Layout} />
          <PublicRoute path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </Provider>
  );

  // #######################################################################

  function RootRoute(props) {
    var userDispatch = useUserDispatch();

    useEffect(() => {
      const url = new URL(window.location.toString());
      const token = url.searchParams.get('token');
      if (token === null) {
        return;
      }
      const party = url.searchParams.get('party');
      if (party === null) {
        throw Error("When 'token' is passed via URL, 'party' must be passed too.");
      }
      localStorage.setItem("daml.party", party);
      localStorage.setItem("daml.token", token);
    // localStorage.setItem("party.role", role);

      userDispatch({ type: "LOGIN_SUCCESS", token, party });
    //  userDispatch({ type: "LOGIN_SUCCESS", token, party, role });
      
    })

    return (
      <Redirect to="/app/report" />
    )
  }

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          userState.isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          userState.isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
