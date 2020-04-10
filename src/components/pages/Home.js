import React from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from '../../actions/filterQuestionsByAnswered';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const mapStateToProps = (state) => {
  const answeredQuestionIds = Object.keys(
    state.users[state.authedUser].answers
  );

  const filteredQuestions = Object.values(state.questions).filter(
    (question) =>
      answeredQuestionIds.includes(question.id) ===
      state.filterQuestionsByAnswered
  );

  return {
    filterQuestionsByAnswered: state.filterQuestionsByAnswered,
    filteredQuestions: filteredQuestions,
    users: state.users,
  };
};

const mapDispatchToProps = {
  toggleFilter,
};

function Home(props) {
  return (
    <Grid container justify={'center'} style={{ backgroundColor: '#fff' }}>
      <Grid item container justify={'center'}>
        Toggle
      </Grid>
      <Grid item xs={6}>
        <List>
          {props.filteredQuestions.map((question) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={props.users[question.author].name}
                    src={props.users[question.author].avatarURL}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Would you rather?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                        style={{ display: 'inline' }}
                      >
                        {props.users[question.author].name}
                      </Typography>
                      {' — '} {question.optionOne.text}...
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Grid>
    </Grid>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
