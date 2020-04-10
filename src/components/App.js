import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import Container from '@material-ui/core/Container';

import { handleInitialData } from '../actions/shared';
import Login from './pages/Login';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import MenuAppBar from './MenuAppBar';
import Leaderboard from './pages/Leaderboard';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

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
    const authedUser = this.props.authedUser;
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
        <MenuAppBar />
        <Container>
          <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/home" component={Home} isAuth={authedUser} />
            <PrivateRoute
              path="/leaderboard"
              component={Leaderboard}
              isAuth={authedUser}
            />
            <Route component={NoMatch} />
            {/*<Route path="/poll/:id" component={Poll} />*/}
            {/*<Route path="/new" component={NewPoll} />*/}
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
