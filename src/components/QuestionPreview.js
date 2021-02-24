import React from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import UserInfo from "./UserInfo";

const QuestionPreview = (props) => {
  const { name, avatarURL } = props.author;
  const { optionOne, optionTwo, qid, isAnswered } = props;
  return (
    <div className="question-preview">
      <UserInfo name={name} avatarURL={avatarURL} />
      Would you rather...
      <p>
        {optionOne} or {optionTwo}
      </p>
      <Link
        to={{
          pathname: `/Question/${qid}`,
          state: {
            qid,
            isAnswered,
          },
        }}
      >
        view poll
      </Link>
    </div>
  );
};

function mapStateToProps({ questions, users }, { qid }) {
  return {
    author: users[questions[qid].author],
    optionOne: questions[qid].optionOne.text,
    optionTwo: questions[qid].optionTwo.text,
  };
}
export default connect(mapStateToProps)(QuestionPreview);
