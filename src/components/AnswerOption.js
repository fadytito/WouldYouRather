import React from "react";

const AnswerOption = (props) => {
  const { votes, totalVotes, isUserAnswer, answerText } = props;
  const votesPercentage = Math.round((votes / totalVotes) * 100);
  return (
    <div
      className="answer p-3"
      style={{
        backgroundColor: isUserAnswer ? "rgb(231, 245, 231)" : "",
      }}
    >
      <div>{answerText}</div>
      <div
        className="votes-percentage"
        style={{ backgroundSize: votesPercentage }}
      >
        {votes} of {totalVotes} votes ({votesPercentage}%)
      </div>
    </div>
  );
};

export default AnswerOption;
