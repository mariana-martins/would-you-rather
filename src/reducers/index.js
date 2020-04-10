import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';
import filterQuestionsByAnswered from './filterQuestionsByAnswered';
import loading from './loading';

export default combineReducers({
  authedUser,
  users,
  questions,
  filterQuestionsByAnswered,
  loading,
});
