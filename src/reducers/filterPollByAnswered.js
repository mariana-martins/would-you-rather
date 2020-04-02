import { TOGGLE_FILTER } from '../actions/filterPollByAnswered';

export default function filterPollByAnswered(state = false, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return !state;
    default:
      return state;
  }
}
