import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  avatar: {
    width: 50,
    height: 50,
  },
  title: {
    paddingTop: 100,
    paddingBottom: 25,
  },
  subtitle: {
    paddingBottom: 50,
  },
  list: {
    border: '1px black solid',
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
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography align={'center'} variant="h1" className={classes.title}>
          Would You Rather?
        </Typography>
        <Typography
          align={'center'}
          variant="subtitle1"
          className={classes.subtitle}
        >
          Select an user to log in
        </Typography>
      </Grid>
      <Grid container justify={'center'}>
        <Grid item xs={3}>
          <List
            component={'nav'}
            classes={{
              root: classes.list,
            }}
          >
            {props.users.map((user) => (
              <ListItem button onClick={() => props.setAuthedUser(user.id)}>
                <ListItemIcon>
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className={classes.avatar}
                  />
                </ListItemIcon>
                <ListItemText>
                  {user.name} (id: {user.id})
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
