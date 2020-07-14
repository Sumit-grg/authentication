import React, { Component } from 'react';
import './App.css';
import firebase, { provider } from './firebase';
import NavBar from './component/NavBar';

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    // console.log(this.state.user);
    const { user } = this.state;
    const username = user ? user.displayName : 'No user';
    return (
      <>
        <NavBar signIn={this.signIn} signOut={this.signOut} user={this.state.user} />
        <p>Hello {username}</p>
      </>
    );
  }
}

export default App;
