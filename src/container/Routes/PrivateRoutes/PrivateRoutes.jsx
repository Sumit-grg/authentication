import React, { Component } from 'react';
import firebase from '../../../firebase';
import { navigate } from '@reach/router';

class PrivateRoutes extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        alert('Please sign in to view this page');
        navigate('/');
      }
    });
  }
  render() {
    return <>{this.props.children}</>;
  }
}

export default PrivateRoutes;
