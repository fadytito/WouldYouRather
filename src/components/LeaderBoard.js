import React from "react";
import UserStats from "./UserStats";
import { connect } from "react-redux";

const LeaderBoard = (props) => {
  const { usersIds, users } = props;
  return (
    <div className="leaderboard">
      <ul>
        {usersIds.map((userId) => (
          <li key={userId}>
            <UserStats user={users[userId]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps({ users }) {
  const usersIds = Object.keys(users);
  return {
    users,
    usersIds: usersIds.sort((a, b) => {
      return (
        users[b].questions.length +
        Object.keys(users[b].answers).length -
        (users[a].questions.length + Object.keys(users[a].answers).length)
      );
    }),
  };
}

export default connect(mapStateToProps)(LeaderBoard);
