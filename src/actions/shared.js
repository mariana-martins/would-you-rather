import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';
import { setHideLoading, setShowLoading } from './loading';
import { getInitialData } from '../utils/API';

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
