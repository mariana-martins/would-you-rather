import React from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Avatar from '@material-ui/core/Avatar';
import { handleSaveQuestionAnswer } from '../../actions/questions';
import BaseContainer from '../BaseContainer';
import Loading from '../Loading';

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
    <BaseContainer>
      <Loading>
        <Grid container item justify={'center'} xs={12}>
          <Typography variant={'h4'} style={{ paddingBottom: 15 }}>
            Would you rather?
          </Typography>
          <Grid container item justify={'center'} xs={12}>
            {!answered && (
              <Typography
                align={'center'}
                variant="subtitle1"
                style={{ paddingBottom: 40 }}
              >
                Select one option below
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid container item justify={'center'} xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    name="options"
                    value={value}
                    onChange={handleChange}
                    style={{ marginBottom: 50 }}
                  >
                    <FormControlLabel
                      value="optionOne"
                      className="question-label"
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
                      className="question-label"
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
              <Grid container item xs={6} alignItems={'center'}>
                <Avatar alt={author.name} src={author.avatarURL} />
                <span style={{ paddingLeft: 10, fontStyle: 'italic' }}>
                  {author.name} made this poll.
                </span>
              </Grid>
              <Grid container item xs={6} justify={'flex-end'}>
                {!answered && (
                  <Button
                    variant={'contained'}
                    color={'secondary'}
                    type={'submit'}
                  >
                    Submit
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Loading>
    </BaseContainer>
  );
}

function RadioLabel(props) {
  return (
    <Typography>
      {props.text}
      {props.answered && (
        <span>
          {' — '}
          This option had {props.votes} {props.votes > 1 ? 'votes' : 'vote'} in
          total ({props.percentage}%).
        </span>
      )}
    </Typography>
  );
}

export default Question;
