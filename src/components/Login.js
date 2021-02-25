import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {
    selectedUser: "",
    redirect: false
  };
  
  handleInputChange = (e) => {
    this.setState({
      selectedUser: e.target.value,
    });
  };
  handleSignIn = () => {
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
    this.setState({redirect: true})
    
  };
  render() {
    const {usersIds, users, pathname} = this.props;
    if(this.state.redirect) {
      return <Redirect to={pathname || '/'}/>
    }
    return (
      <div className="login text-center">
        <h4 className="text-center mb-4">Please select a user to proceed</h4>
        <div className="mb-4">
          <select
            name="users"
            id="users"
            onChange={this.handleInputChange}
            defaultValue="select user"
          >
            <option disabled>select user</option>
            {usersIds.map((userId) => (
              <option key={userId} value={users[userId].id}>
                {users[userId].name}
              </option>
            ))}
          </select>
        </div>
        <button className="" onClick={this.handleSignIn} disabled={!this.state.selectedUser}>
          sign in
        </button>
      </div>
    );
  }
}

function mapStateToProps({ users }, {location}) {
  const pathname = location.state.pathname
  return {
    usersIds: Object.keys(users),
    users,
    pathname
  };
}

export default connect(mapStateToProps)(Login);
