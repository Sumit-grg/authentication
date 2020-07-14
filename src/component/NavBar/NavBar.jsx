import React, { Component } from 'react';
import styles from './NavBar.module.scss';

class NavBar extends Component {
  state = {};

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

    const disabledClass = user ? '' : styles.faStylesDisabled;
    return <div>{this.getSignInOutJsx()}</div>;
  }
}

export default NavBar;
