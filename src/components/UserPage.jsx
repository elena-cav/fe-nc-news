import React, { Component } from 'react';
import * as api from '../utils/api';
import { StyledUser } from '../styled/user';
class UserPage extends Component {
  state = {
    user: {}
  };
  componentDidMount() {
    api.getUser().then((user) => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <StyledUser>
                <img src={user.avatar_url} alt="" />
        <h4>Username: {user.username}</h4>

        <h4>Name: {user.name}</h4>
      </StyledUser>
    );
  }
}

export default UserPage;
