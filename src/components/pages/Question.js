import React from 'react';
import Loading from '../Loading';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

function Question() {
  const { id } = useParams();
  const question = useSelector((state) => state.questions[id]);
  const user = useSelector((state) => state.users[state.authedUser]);

  const answered = user.answers[id] !== undefined;
  return (
    <>
      <Typography variant={'h4'}>Would you rather?</Typography>
      <Loading>
        {answered ? (
          <QuestionStats question={question} user={user} />
        ) : (
          <AnswerQuestion question={question} user={user} />
        )}
      </Loading>
    </>
  );
}

export default Question;

function AnswerQuestion(props) {
  return <div>lalala</div>;
}

function QuestionStats(props) {
  return <div>lelele</div>;
}
