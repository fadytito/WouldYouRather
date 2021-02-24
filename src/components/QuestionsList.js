import React from "react";
import QuestionPreview from "./QuestionPreview";

const QuestionsList = (props) => {
  const { qids } = props;
  if (qids.length === 0) {
    return <div className="text-center">No questions</div>;
  }
  return (
    <ul className="questions-list">
      {qids.map((qid) => (
        <li key={qid} className="question">
          <QuestionPreview qid={qid} />
        </li>
      ))}
    </ul>
  );
};

export default QuestionsList;
