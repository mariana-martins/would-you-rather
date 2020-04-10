import { receiveUsers } from './users';
import { receivePolls } from './polls';
import { receiveAnswers } from './answers';

const initialUsers = {
  '1': {
    avatar: '/img/sarah.png',
    name: 'Anna',
    id: '1',
  },
  '2': {
    avatar: '/img/claudia.png',
    name: 'Claudia',
    id: '2',
  },
  '3': {
    avatar: '/img/john.png',
    name: 'John',
    id: '3',
  },
  '4': {
    avatar: '/img/maria.png',
    name: 'Maria',
    id: '4',
  },
  '5': {
    avatar: '/img/tyler.png',
    name: 'Paul',
    id: '5',
  },
  '6': {
    avatar: '/img/tim.png',
    name: 'Tim',
    id: '6',
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
