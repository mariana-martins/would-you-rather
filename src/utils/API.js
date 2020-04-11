import { _getUsers, _getQuestions, _saveQuestion } from './_DATA.js';
import { _saveQuestionAnswer } from './_DATA';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestion(question) {
  return _saveQuestion(question);
}

export function saveQuestionAnswer(questionAnswer) {
  return _saveQuestionAnswer(questionAnswer);
}

export function getUsers() {
  return _getUsers();
}
