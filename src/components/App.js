import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser,
  };
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    /*
    TODO: Adicionar paginas
      - Autenticação
      - Home
      - Pergunta
      - Add Pergunta
      - Leaderboard
      - 404
    */
    return (
      <Router>
        <div>
          {/*<Nav />*/}
          {!this.props.authedUser
            ? // <Route path="/" exact component={Login} />
              null
            : // <Route path="/home" component={Home} />
              // <Route path="/poll/:id" component={Poll} />
              // <Route path="/new" component={NewPoll} />
              // <Route path="/leaderboard" component={Leaderboard} />
              null}
          {/*<Route component={NoMatch} />*/}
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
