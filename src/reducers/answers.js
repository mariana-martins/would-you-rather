import { ADD_ANSWER, RECEIVE_ANSWERS } from '../actions/answers';

export default function answers(state = [], action) {
  switch (action.type) {
    case RECEIVE_ANSWERS:
      return [...state, ...action.answers];
    case ADD_ANSWER:
      const { answer } = action;

      return [...state, answer];
    default:
      return state;
  }
}
