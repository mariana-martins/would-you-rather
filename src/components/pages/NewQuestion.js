import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
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
    <div>
      <Typography variant={'h4'}>Would you rather ?</Typography>
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
        <Button variant="contained" color="primary" type={'submit'}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);
