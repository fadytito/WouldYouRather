import React, { Component } from "react";
import { handleSaveQuestion } from "../actions/shared";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    redirect: false
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmitQuestion = () => {
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, author } = this.props;
    dispatch(
      handleSaveQuestion({
        optionOneText,
        optionTwoText,
        author,
      })
    );
    this.setState({redirect: true})
  };
  render() {
    const { optionOneText, optionTwoText } = this.state;

    if(this.state.redirect) {
      return <Redirect to="/"/>
    }
    return (
      <div className="new-question">
        <h3 className="mb-4">Would you rather...</h3>
        <div className="my-3">
          <input
            placeholder="enter option one here"
            name="optionOneText"
            value={optionOneText}
            onChange={this.handleInputChange}
          />
        </div>
        <h5 className="text-center">OR</h5>
        <div className="my-3">
          <input
            placeholder="enter option two here"
            name="optionTwoText"
            value={optionTwoText}
            onChange={this.handleInputChange}
          />
        </div>
        <button
          className="d-block mx-auto mt-4"
          onClick={this.handleSubmitQuestion}
          disabled={!optionOneText || !optionTwoText}
        >
          Submit
        </button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    author: authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
