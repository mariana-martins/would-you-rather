import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import polls from './polls';
import answers from './answers';
import filterPollByAnswered from './filterPollByAnswered';

export default combineReducers({
  authedUser,
  users,
  polls,
  answers,
  filterPollByAnswered,
});
