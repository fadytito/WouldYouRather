import React from "react";
import UserInfo from './UserInfo';

const UserStats = (props) => {
  const quesionsNum = props.user.questions.length;
  const answersNum = Object.keys(props.user.answers).length;
  const total = quesionsNum + answersNum;
  const { avatarURL, name } = props.user;
  
  return (
    <div className="user-stats">
      <div className="d-flex align-items-center justify-content-between">
        <UserInfo name={name} avatarURL={avatarURL}/>
        <div className="total-score text-center">
          <p>Total score</p>
          {total}
        </div>
      </div>
      <div>Number of questions: {quesionsNum}</div>
      <div>Number of answers: {answersNum}</div>
    </div>
  );
};

export default UserStats;
