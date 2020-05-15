import React from "./node_modules/react";
import ReactDOM from "./node_modules/react-dom";
import { Provider } from "./node_modules/react-redux";
import { Values } from "./node_modules/redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import FieldArraysForm from "./FieldArraysForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Field Arrays</h2>
      <FieldArraysForm onSubmit={showResults} />
      <Values form="fieldArrays" />
    </div>
  </Provider>,
  rootEl
);
