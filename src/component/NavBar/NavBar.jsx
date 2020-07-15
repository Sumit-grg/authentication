import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import { Routes, Link } from '@reach/router';

class NavBar extends Component {
  state = {};
  // Conditional rendering - if 'user' state contains object (true), renders 'signout' on page with onclick to signOut function. If 'user' state contains null, renders 'signIn now' thats attached to 'signIn' onClick.
  getSignInOutJsx = () => {
    const { signIn, signOut, user } = this.props;

    if (user) {
      return <span onClick={signOut}>SIGN OUT</span>;
    } else {
      return <span onClick={signIn}> sign in now</span>;
    }
  };

  render() {
    const { user } = this.props;
    // const disabledClass = user ? '' : styles.faStylesDisabled;
    return (
      <>
        <div>{this.getSignInOutJsx()}</div>
        <Link to="personal">
          <button>Detail</button>
        </Link>
        <Link to="photo">
          <button>Photo</button>
        </Link>
      </>
    );
  }
}

export default NavBar;
