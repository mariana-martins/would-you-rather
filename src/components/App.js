import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { handleInitialData } from '../actions/shared';
import MenuAppBar from './MenuAppBar';
import Login from './pages/Login';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Leaderboard from './pages/Leaderboard';
import NewQuestion from './pages/NewQuestion';
import Question from './pages/Question';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F05D5E',
    },
    secondary: {
      main: '#C5D86D',
    },
  },
});

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
    return (
      <ThemeProvider theme={theme}>
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
              <PrivateRoute
                path="/add"
                component={NewQuestion}
                isAuth={authedUser}
              />
              <PrivateRoute
                path="/questions/:id"
                component={Question}
                isAuth={authedUser}
              />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </Router>
      </ThemeProvider>
    );
  }
}

export default connect(mapStateToProps)(App);
