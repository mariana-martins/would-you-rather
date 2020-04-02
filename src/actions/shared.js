import { receiveUsers } from './users';
import { receivePolls } from './polls';
import { receiveAnswers } from './answers';

const initialUsers = {
  '1': {
    avatar: '',
    name: 'Beto',
    id: '1',
  },
  '2': {
    avatar: '',
    name: 'Mari',
    id: '2',
  },
};

const initialPolls = {
  '1': {
    id: '1',
    options: ['eat burger', 'eat pizza'],
    author: '1',
  },
};

const initialAnswers = [
  {
    userId: '1',
    pollId: '1',
    optionIndex: 0,
  },
];

export function handleInitialData() {
  return (dispatch) => {
    dispatch(receiveUsers(initialUsers));
    dispatch(receivePolls(initialPolls));
    dispatch(receiveAnswers(initialAnswers));
  };
}
