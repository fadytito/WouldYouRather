import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authedUser";

const Nav = (props) => {
  const { authedUser, userInfo } = props;
  const logoutHandle = () => {
    props.dispatch(logoutUser());
  };
  return (
    <nav className="nav mb-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between py-4">
          <ul className="nav-list d-flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/NewQuestion">New Question</Link>
            </li>
            <li>
              <Link to="/LeaderBoard">Leader Board</Link>
            </li>
          </ul>
          {authedUser && (
            <div className="d-flex">
              <div className="mx-4">{userInfo.name}</div>
              <button onClick={logoutHandle}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    userInfo: users[authedUser],
  };
}

export default connect(mapStateToProps)(Nav);
