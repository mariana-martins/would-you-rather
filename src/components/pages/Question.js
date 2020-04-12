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
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const answered = user.answers[id] !== undefined;

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
    history.push('/home');
  };
  return (
    <>
      <Typography variant={'h4'}>Would you rather?</Typography>
      <Loading>
        <Paper>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <FormControl component="fieldset" required>
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
                      control={<Radio />}
                      label={question.optionOne.text}
                    />
                    <FormControlLabel
                      value="optionTwo"
                      control={<Radio />}
                      label={question.optionTwo.text}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Avatar alt={author.name} src={author.avatarURL} />
                <span>{author.name}</span>
              </Grid>
              <Grid item xs={6}>
                <Button variant={'contained'} color={'primary'} type={'submit'}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Loading>
    </>
  );
}

export default Question;
