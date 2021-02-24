import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import QuestionDetails from "./QuestionDetails";
import PageNotFound from "./PageNotFound";
import Nav from "./Nav";
import ProtectedRoute from "./ProtectedRoute";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const {authedUser} = this.props
    return (
      <Router>
        <LoadingBar style={{ backgroundColor: "white" }} />
        <Nav />
        <div className="container">
          <main className="main mb-5 mx-auto">
            <Switch>
              <Route path="/Login" exact component={Login} />
              <ProtectedRoute
                path="/"
                exact
                component={Dashboard}
                isAuthed={authedUser}
              />

              <ProtectedRoute
                path="/LeaderBoard"
                exact
                component={LeaderBoard}
                isAuthed={authedUser}
              />
              <ProtectedRoute
                path="/NewQuestion"
                exact
                component={NewQuestion}
                isAuthed={authedUser}
              />
              <ProtectedRoute
                path="/Question/:id"
                exact
                component={QuestionDetails}
                isAuthed={authedUser}
              />
              <Route component={PageNotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
