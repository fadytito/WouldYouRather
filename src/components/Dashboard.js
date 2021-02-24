import React, { Component } from "react";

import { connect } from "react-redux";

import QuestionsList from "./QuestionsList";

class Dashboard extends Component {
  state = {
    answeredTab: false,
  };

  toggleView = () => {
    this.setState((prevState) => ({
      answeredTab: !prevState.answeredTab,
    }));
  };
  render() {
    const {answeredTab} = this.state;
    const { answeredQuestionsIds, unAnsweredQuestionsIds } = this.props;
    return (
      <div className="dashboard">
        <div className="btns-wrp">
          <button onClick={this.toggleView} disabled={!answeredTab}>
            unanswered questions
          </button>
          <button onClick={this.toggleView} disabled={answeredTab}>
            answered questions
          </button>
        </div>

        {answeredTab ? (
          <div>
            <QuestionsList qids={answeredQuestionsIds} />
          </div>
        ) : (
          <div>
            <QuestionsList qids={unAnsweredQuestionsIds} />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const questionsIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  const answeredQuestionsIds = [];
  const unAnsweredQuestionsIds = [];

  questionsIds.forEach((questionId) => {
    if (users[authedUser].answers[questionId]) {
      answeredQuestionsIds.push(questionId);
    } else {
      unAnsweredQuestionsIds.push(questionId);
    }
  });

  return {
    answeredQuestionsIds,
    unAnsweredQuestionsIds,
  };
}

export default connect(mapStateToProps)(Dashboard);
