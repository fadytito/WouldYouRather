import React, { Component } from "react";
import { connect } from "react-redux";

import { handleSaveAnswer } from "../actions/shared";
import AnswerOption from "./AnswerOption";
import UserInfo from "./UserInfo";

class QuestionDetails extends Component {
  state = { answer: "" };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({
      answer: value,
    });
  };
  submitAnswerHandler = (e) => {
    e.preventDefault();
    const { dispatch, authedUser, qid } = this.props;
    dispatch(
      handleSaveAnswer({
        authedUser,
        qid,
        answer: this.state.answer,
      })
    );
  };

  render() {
    const { question, qid, author, isAnswered } = this.props;
    const { name, avatarURL } = author;
    const { optionOne, optionTwo } = question;
    const optionOneVotesNum = question.optionOne.votes.length;
    const optionTwoVotesNum = question.optionTwo.votes.length;
    const totalVotes = optionOneVotesNum + optionTwoVotesNum;
    return (
      <div>
        <div className="question-details">
          <UserInfo name={name} avatarURL={avatarURL} />

          <div>
            <h5 className="mb-3">Would you rather...</h5>
            {!isAnswered ? (
              <form onSubmit={this.submitAnswerHandler}>
                <div className="px-3">
                  <input
                    type="radio"
                    name="would you rather"
                    id={"optionOne" + qid}
                    value="optionOne"
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor={"optionOne" + qid}>{optionOne.text}</label>
                </div>
                <div className="px-3">
                  <input
                    type="radio"
                    name="would you rather"
                    id={"optionTwo" + qid}
                    value="optionTwo"
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor={"optionTwo" + qid}>{optionTwo.text}</label>
                </div>

                <button
                  type="submit"
                  className="mt-3 w-100"
                  disabled={!this.state.answer}
                >
                  submit your answer
                </button>
              </form>
            ) : (
              <div>
                <AnswerOption
                  answerText={optionOne.text}
                  isUserAnswer={isAnswered === "optionOne"}
                  votes={optionOneVotesNum}
                  totalVotes={totalVotes}
                />
                <AnswerOption
                  answerText={optionTwo.text}
                  isUserAnswer={isAnswered === "optionTwo"}
                  votes={optionTwoVotesNum}
                  totalVotes={totalVotes}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { location }) {
  const { qid } = location.state;
  const question = questions[qid];
  const author = users[question.author];
  const isAnswered = users[authedUser].answers[qid];

  return {
    qid,
    question,
    author,
    authedUser,
    isAnswered,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
