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
import Switch from '@material-ui/core/Switch';
import Loading from '../Loading';
import { useHistory } from 'react-router';

const mapStateToProps = (state) => {
  const answeredQuestionIds = Object.keys(
    state.users[state.authedUser].answers
  );

  const filteredQuestions = Object.values(state.questions).filter(
    (question) =>
      answeredQuestionIds.includes(question.id) ===
      state.filterQuestionsByAnswered
  );

  filteredQuestions.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });

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
  const history = useHistory();
  return (
    <Grid container justify={'center'} style={{ backgroundColor: '#fff' }}>
      <Loading>
        <Grid item container justify={'center'}>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Not Answered</Grid>
              <Grid item>
                <Switch
                  checked={props.filterQuestionsByAnswered}
                  onChange={props.toggleFilter}
                />
              </Grid>
              <Grid item>Answered</Grid>
            </Grid>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <List>
            {props.filteredQuestions.map((question) => (
              <div key={question.id}>
                <ListItem
                  alignItems="flex-start"
                  button
                  onClick={() => history.push(`/questions/${question.id}`)}
                >
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
              </div>
            ))}
          </List>
        </Grid>
      </Loading>
    </Grid>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
