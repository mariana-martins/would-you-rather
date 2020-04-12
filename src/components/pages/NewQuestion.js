import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import BaseContainer from '../BaseContainer';
import { handleSaveQuestion } from '../../actions/questions';

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
});

const mapDispatchToProps = {
  handleSaveQuestion,
};

function NewQuestion(props) {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');
  const history = useHistory();

  const handleOptionOneChange = (e) => {
    setOptionOneText(e.target.value);
  };
  const handleOptionTwoChange = (e) => {
    setOptionTwoText(e.target.value);
  };

  const questionSubmit = (event) => {
    event.preventDefault();
    props.handleSaveQuestion({
      optionOneText,
      optionTwoText,
      author: props.authedUser,
    });
    history.push('/home');
  };
  return (
    <BaseContainer>
      <Grid container item justify={'center'} xs={12}>
        <Typography variant={'h4'} style={{ paddingBottom: 15 }}>
          Would you rather?
        </Typography>
      </Grid>
      <Grid container item justify={'center'} xs={12}>
        <Typography align={'center'} variant="subtitle1">
          Write two options for your poll
        </Typography>
      </Grid>
      <Grid container item justify={'center'} xs={12}>
        <form onSubmit={questionSubmit}>
          <TextField
            label="First Option"
            style={{ margin: 8 }}
            placeholder="Insert your first option here"
            fullWidth
            margin="normal"
            value={optionOneText}
            onChange={handleOptionOneChange}
            required={true}
          />
          <TextField
            label="Second Option"
            style={{ margin: 8 }}
            placeholder="Insert your second option here"
            fullWidth
            margin="normal"
            value={optionTwoText}
            onChange={handleOptionTwoChange}
            required={true}
          />
          <Grid container item justify={'center'} xs={12}>
            <Button
              variant="contained"
              color="secondary"
              type={'submit'}
              style={{ marginTop: 15 }}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </BaseContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
