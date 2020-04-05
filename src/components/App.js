import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Login from './pages/Login';
import Container from '@material-ui/core/Container';

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
        <Container>
          {/*<Nav />*/}
          {!this.props.authedUser ? (
            <Route path="/" exact component={Login} />
          ) : (
            // <Route path="/home" component={Home} />
            // <Route path="/poll/:id" component={Poll} />
            // <Route path="/new" component={NewPoll} />
            // <Route path="/leaderboard" component={Leaderboard} />
            <p>Logged: {this.props.authedUser}</p>
          )}
          {/*<Route component={NoMatch} />*/}
        </Container>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
