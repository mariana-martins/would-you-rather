import React, { useCallback } from 'react';
import Loading from '../Loading';
import Typography from '@material-ui/core/Typography';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import Avatar from '@material-ui/core/Avatar';
import { handleSaveQuestionAnswer } from '../../actions/questions';

function Question() {
  const { id } = useParams();
  const question = useSelector((state) => state.questions[id]);
  const user = useSelector((state) => state.users[state.authedUser]);
  const author = useSelector((state) => state.users[question.author]);
  const [value, setValue] = React.useState(user.answers[id] || '');
  const dispatch = useDispatch();

  const answered = user.answers[id] !== undefined;
  const calculatePercentage = (option, total) =>
    ((100 * option) / total).toFixed(2);
  const votes = {
    optionOne: question.optionOne.votes.length,
    optionTwo: question.optionTwo.votes.length,
    total: question.optionOne.votes.length + question.optionTwo.votes.length,
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = {
      authedUser: user.id,
      qid: question.id,
      answer: value,
    };
    handleSaveQuestionAnswer(answer)(dispatch);
  };
  return (
    <>
      <Typography variant={'h4'}>Would you rather?</Typography>
      <Loading>
        <Paper>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Select one option below:
                  </FormLabel>
                  <RadioGroup
                    name="options"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="optionOne"
                      control={<Radio required disabled={answered} />}
                      label={
                        <RadioLabel
                          answered={answered}
                          text={question.optionOne.text}
                          votes={votes.optionOne}
                          percentage={calculatePercentage(
                            votes.optionOne,
                            votes.total
                          )}
                        />
                      }
                    />
                    <FormControlLabel
                      value="optionTwo"
                      control={<Radio required disabled={answered} />}
                      label={
                        <RadioLabel
                          answered={answered}
                          text={question.optionTwo.text}
                          votes={votes.optionTwo}
                          percentage={calculatePercentage(
                            votes.optionTwo,
                            votes.total
                          )}
                        />
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Avatar alt={author.name} src={author.avatarURL} />
                <span>{author.name}</span>
              </Grid>
              <Grid item xs={6}>
                {!answered && (
                  <Button
                    variant={'contained'}
                    color={'primary'}
                    type={'submit'}
                  >
                    Submit
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Loading>
    </>
  );
}

function RadioLabel(props) {
  return (
    <>
      {props.text}
      {props.answered && (
        <span>
          {' — '}
          Total: {props.votes} ({props.percentage}%)
        </span>
      )}
    </>
  );
}

export default Question;
