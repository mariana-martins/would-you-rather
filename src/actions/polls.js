export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';

function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}

export function handleAddPoll(option1, option2) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const poll = {
      id: 1,
      options: [option1, option2],
      author: authedUser,
    };

    dispatch(addPoll(poll));
  };
}

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}
