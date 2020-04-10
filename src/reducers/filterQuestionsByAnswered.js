import { TOGGLE_FILTER } from '../actions/filterQuestionsByAnswered';

export default function filterQuestionsByAnswered(state = false, action) {
  switch (action.type) {
    case TOGGLE_FILTER:
      return !state;
    default:
      return state;
  }
}
