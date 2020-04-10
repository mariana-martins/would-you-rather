import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { getInitialData } from '../utils/API';
import { setAuthedUser } from './authedUser';
import { setHideLoading, setShowLoading } from './loading';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(setShowLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(null));
      dispatch(setHideLoading());
    });
  };
}
