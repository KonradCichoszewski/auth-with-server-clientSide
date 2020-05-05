import React, { Component } from 'react';
import requireAuth from 'components/requireAuth';

class SecretFeature extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the super-duper secret feature page!</h1>
        <h3>You can only see this if you are authenticated</h3>
      </div>
    )
  }
}

export default requireAuth(SecretFeature);