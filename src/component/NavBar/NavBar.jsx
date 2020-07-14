import React, { Component } from 'react';
import styles from './NavBar.module.scss';

class NavBar extends Component {
  state = {};
  // Conditional rendering - if 'user' state contains object (true), renders 'signout' on page with onclick to signOut function. If 'user' state contains null, renders 'signIn now' thats attached to 'signIn' onClick.
  getSignInOutJsx = () => {
    const { signIn, signOut, user } = this.props;

    if (user) {
      return (
        <span className={styles.displayWelcome} onClick={this.props.signOut}>
          SIGN OUT
        </span>
      );
    } else {
      return (
        <span className={styles.displaySignIn} onClick={this.props.signIn}>
          sign in now
        </span>
      );
    }
  };

  render() {
    const { user } = this.props;
    // const disabledClass = user ? '' : styles.faStylesDisabled;
    return <div>{this.getSignInOutJsx()}</div>;
  }
}

export default NavBar;
