import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { auth } from "../config/firebaseConfig";
import { createUserInDb, getUserInDb } from "../config/db";
import { Layout } from "./layout";

import { Home } from "./home";
import { Account } from "./account";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";

class App extends Component {
  state = {
    user: undefined
  };
  componentDidMount() {
    this.authListener();
  }

  handleSignIn = ({ email, password }) => {
    auth.signInWithEmailAndPassword(email, password);
  };

  handleSignUp = ({ email, password, username }) => {
    auth.createUserWithEmailAndPassword(email, password).then(authUser => {
      console.log("AuthUser::: ", authUser);
      if (authUser) {
        createUserInDb(authUser.user.uid, username, email);
      }
    });
  };

  handleSignOut = () => {
    auth.signOut();
  };

  // handleResetPassword = email => {
  //   auth.sendPasswordResetEmail(email);
  // };

  // handlePasswordUpdate = password => {
  //   auth.currentUser.updatePassword(password);
  // };

  authListener = () => {
    auth.onAuthStateChanged(user => {
      console.log("user:: ", user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: undefined });
      }
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Layout
          isAuthenticated={!!this.state.user}
          handleSignOut={this.handleSignOut}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/account"
              render={props => {
                return this.state.user ? (
                  <Account {...props} />
                ) : (
                  <Redirect to="/signin" />
                );
              }}
            />
            <Route
              path="/signin"
              render={props => {
                return this.state.user ? (
                  <Redirect to="/" />
                ) : (
                  <SignIn {...props} handleSignIn={this.handleSignIn} />
                );
              }}
            />
            <Route
              path="/signup"
              render={props => {
                return this.state.user ? (
                  <Redirect to="/" />
                ) : (
                  <SignUp {...props} handleSignUp={this.handleSignUp} />
                );
              }}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
