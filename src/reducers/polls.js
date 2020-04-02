import { ADD_POLL, RECEIVE_POLLS } from '../actions/polls';

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    case ADD_POLL:
      const { poll } = action;

      return {
        ...state,
        [poll.id]: poll,
      };
    default:
      return state;
  }
}
