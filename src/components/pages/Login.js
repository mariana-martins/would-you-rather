import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../Loading';
import BaseContainer from '../BaseContainer';
import { setAuthedUser } from '../../actions/authedUser';

const useStyles = makeStyles({
  avatar: {
    width: 50,
    height: 50,
  },
  title: {
    paddingTop: 25,
    paddingBottom: 25,
  },
  subtitle: {
    paddingBottom: 50,
  },
});

const mapStateToProps = (state) => {
  return {
    users: Object.values(state.users),
  };
};

const mapDispatchToProps = {
  setAuthedUser,
};

function Login(props) {
  const classes = useStyles();
  const history = useHistory();
  const login = (user) => {
    props.setAuthedUser(user.id);
    history.push('/home');
  };
  return (
    <BaseContainer>
      <Grid item xs={12}>
        <Typography align={'center'} variant="h1" className={classes.title}>
          Would You Rather?
        </Typography>
        <Typography
          align={'center'}
          variant="subtitle1"
          className={classes.subtitle}
        >
          Select a user to log in
        </Typography>
      </Grid>
      <Grid container justify={'center'}>
        <Grid item xs={3}>
          <Loading>
            <List
              component={'nav'}
              classes={{
                root: classes.list,
              }}
            >
              {props.users &&
                props.users.map((user, i) => (
                  <ListItem key={i} button onClick={() => login(user)}>
                    <ListItemIcon>
                      <img
                        src={user.avatarURL}
                        alt={user.name}
                        className={classes.avatar}
                      />
                    </ListItemIcon>
                    <ListItemText>{user.name}</ListItemText>
                  </ListItem>
                ))}
            </List>
          </Loading>
        </Grid>
      </Grid>
    </BaseContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
