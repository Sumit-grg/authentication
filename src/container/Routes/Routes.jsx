import React, { Component } from 'react';
import { Router } from '@reach/router';
import { firestore } from '../../firebase';
import PersonalDetail from '../../component/PersonalDetail';
import PhotoSection from '../../component/PhotoSection';
import PrivateRoutes from './PrivateRoutes';
import NavBar from '../../component/NavBar';

class Routes extends Component {
  state = {};
  render() {
    return (
      <Router>
        <NavBar path="/" />
        <PrivateRoutes path="/">
          {/* <p>Personal Detail</p>
          <p>Photo Section</p> */}
          <PersonalDetail path="personal" />
          <PhotoSection path="photo" />
        </PrivateRoutes>
      </Router>
    );
  }
}

export default Routes;
