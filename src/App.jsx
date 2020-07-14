import React, { Component } from 'react';
import './App.css';
import firebase, { provider } from './firebase';
import NavBar from './component/NavBar';

class App extends Component {
  // Set the signin of the user to null (coz noone signed in initially)
  state = {
    user: null
  };

  // Render the getUser method as soon as the App renders/'mounts'
  componentDidMount() {
    this.getUser();
  }

  // Goes to firebase, checks if the authentication of user has changed (i.e. signedout or in) and says 'if user state is true, set the state to the users object. If user state is false, set it to null'
  getUser = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  // Redirecting to 3rd-party provider (this case, google) to signIn to firebase
  signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  // Sign the user google account out of firebase access
  signOut = () => {
    firebase.auth().signOut();
  };

  render() {
    // console.log(this.state.user); //The whole user object of their google account info
    const { user } = this.state; //destructured
    const username = user ? user.displayName : 'No user'; //if user true, grab their display name. if false, put 'no user'.
    return (
      <>
        {/* parsing the signIn, signOut and user object to Navbar where the signIn/Out is controlled */}
        <NavBar signIn={this.signIn} signOut={this.signOut} user={this.state.user} />

        <p>Hello {username}</p>
      </>
    );
  }
}

export default App;
