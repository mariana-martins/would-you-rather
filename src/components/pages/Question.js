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

  const answered = user.answers[id] !== undefined;
  return (
    <>
      <Typography variant={'h4'}>Would you rather?</Typography>
      <Loading>
        {answered ? (
          <QuestionStats question={question} user={user} author={author} />
        ) : (
          <AnswerQuestion question={question} user={user} author={author} />
        )}
      </Loading>
    </>
  );
}

export default Question;

function AnswerQuestion(props) {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();
  const saveQuestionAnswer = useCallback(handleSaveQuestionAnswer, [dispatch]);
  const history = useHistory();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    saveQuestionAnswer({
      authedUser: props.user.id,
      qid: props.question.id,
      answer: value,
    });
    history.push('/home');
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <FormControl component="fieldset" required>
              <FormLabel component="legend">Select one option below:</FormLabel>
              <RadioGroup name="options" value={value} onChange={handleChange}>
                <FormControlLabel
                  value="optionOne"
                  control={<Radio />}
                  label={props.question.optionOne.text}
                />
                <FormControlLabel
                  value="optionTwo"
                  control={<Radio />}
                  label={props.question.optionTwo.text}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Avatar alt={props.author.name} src={props.author.avatarURL} />
            <span>{props.author.name}</span>
          </Grid>
          <Grid item xs={6}>
            <Button variant={'contained'} color={'primary'} type={'submit'}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

function QuestionStats(props) {
  return <div>lelele</div>;
}
