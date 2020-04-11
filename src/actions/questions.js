import { setHideLoading, setShowLoading } from './loading';
import { getInitialData, getUsers, saveQuestion } from '../utils/API';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import users from '../reducers/users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function receiveQuestion(question) {
  return {
    type: RECEIVE_QUESTION,
    question,
  };
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(setShowLoading());
    return saveQuestion(question)
      .then((formattedQuestion) => {
        dispatch(receiveQuestion(formattedQuestion));
        return getUsers();
      })
      .then((users) => {
        dispatch(receiveUsers(users));
        dispatch(setHideLoading());
      });
  };
}
