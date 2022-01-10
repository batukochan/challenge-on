import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import firebase from "./firebase";
import {ReactReduxFirebaseProvider,} from "react-redux-firebase";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "./app/store";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./features/SingUp/Login";
import SingUp from "./features/SingUp/SingUp";
import NoMatch from "./components/NoMatch";
const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
    enableLogging: false,
  },
  dispatch: store.dispatch,
};

const Root = () => {
  const dispatch = useDispatch();
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={App}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={SingUp} />
        <Route  component={NoMatch} />
      </Switch>
    </Router>
  )
};

export default Root;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Root />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
