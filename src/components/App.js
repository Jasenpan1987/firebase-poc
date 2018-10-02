import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { auth } from "../config/firebaseConfig";
import { createUserInDb, getUserInDb } from "../config/db";
import { Layout } from "./layout";

import { Home } from "./home";
import { Account } from "./account";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";
import { ChangePassword } from "./changePassword";
import { ResetPassword } from "./resetPassword";

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

  handleResetPassword = email => {
    auth.sendPasswordResetEmail(email);
  };

  handleChangePassword = password => {
    console.log("changePassword:: ", password);
    auth.currentUser.updatePassword(password);
  };

  authListener = () => {
    auth.onAuthStateChanged(user => {
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

            <Route
              path="/changepassword"
              render={props => {
                return this.state.user ? (
                  <ChangePassword
                    {...props}
                    handleChangePassword={this.handleChangePassword}
                  />
                ) : (
                  <Redirect to="/signin" />
                );
              }}
            />

            <Route
              path="/resetpassword"
              render={props => {
                return this.state.user ? (
                  <ResetPassword
                    {...props}
                    handleResetPassword={this.handleResetPassword}
                  />
                ) : (
                  <Redirect to="/signin" />
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
