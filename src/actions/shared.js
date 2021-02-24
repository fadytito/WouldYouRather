import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/api";
import { getQuestions, saveQuestion, saveQuestionAnswer } from "./questions";
import { getUsers, saveUserQuestion, saveUserAnswer } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    _getUsers().then((users) => {
      dispatch(getUsers(users));
      dispatch(hideLoading());
    });
    dispatch(showLoading());
    _getQuestions().then((questions) => {
      dispatch(getQuestions(questions));
      dispatch(hideLoading());
    });
  };
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());
    _saveQuestion(question).then((q) => {
      dispatch(saveUserQuestion(q));
      dispatch(saveQuestion(q));
      dispatch(hideLoading());
    });
  };
}

export function handleSaveAnswer(info) {
  return (dispatch) => {
    dispatch(showLoading());
    _saveQuestionAnswer(info).then(() => {
      dispatch(saveQuestionAnswer(info));
      dispatch(saveUserAnswer(info));
      dispatch(hideLoading());
    });
  };
}
