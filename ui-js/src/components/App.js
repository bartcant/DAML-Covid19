import React, { useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Layout/Layout";
import Error from "../pages/error/Error";
import Login from "../pages/login/Login";
import { useUserState, useUserDispatch } from "../context/UserContext";
// import redux & store
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { ThemeProvider } from "@material-ui/styles";

import Themes from "../themes";
import rootReducer from '../reducers';

// Store
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  const userState = useUserState();

  let theme;
  switch (userState.role) {
    case 'Citizen':
      theme = Themes.citizen;
      break;
    case 'HealthClinic':
      theme = Themes.clinic;
      break;
    case 'Bob':
      theme = Themes.citizen;
      break;
    case 'Operator':
      theme = Themes.operator;
      break;
    case 'NCHealth':
      theme = Themes.agency;
      break;
    default:
      theme = Themes.default;
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={RootRoute} />
            <Route
              exact
              path="/app"
              render={() => <Redirect to="/app/welcome" />}
            />
            <PrivateRoute path="/app" component={Layout} />
            <PublicRoute path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </HashRouter>
      </Provider>
    </ThemeProvider>
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
      <Redirect to="/app/welcome" />
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
