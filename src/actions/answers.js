export const RECEIVE_ANSWERS = 'RECEIVE_ANSWERS';
export const ADD_ANSWER = 'ADD_ANSWER';

function addAnswer(answer) {
  return {
    type: ADD_ANSWER,
    answer,
  };
}

export function handleAddAnswer(pollId, optionIndex) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const answer = {
      pollId,
      optionIndex,
      userId: authedUser,
    };

    dispatch(addAnswer(answer));
  };
}

export function receiveAnswers(answers) {
  return {
    type: RECEIVE_ANSWERS,
    answers,
  };
}
