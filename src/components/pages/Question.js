import React from 'react';
import Loading from '../Loading';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router';

function Question() {
  const { id } = useParams();
  return (
    <>
      <Typography variant={'h4'}>Would you rather?</Typography>
      <Loading>
        <p>Question {id}</p>
      </Loading>
    </>
  );
}

export default Question;
