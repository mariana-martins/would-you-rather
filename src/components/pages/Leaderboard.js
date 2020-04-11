import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { toggleFilter } from '../../actions/filterQuestionsByAnswered';
import Typography from '@material-ui/core/Typography';
import Loading from '../Loading';

const mapStateToProps = (state) => {
  const users = Object.values(state.users).map((user) => ({
    name: user.name,
    avatarURL: user.avatarURL,
    answers: Object.keys(user.answers).length,
    questions: user.questions.length,
  }));

  users.sort((a, b) => {
    const totalA = a.answers + a.questions;
    const totalB = b.answers + b.questions;
    return totalB - totalA;
  });

  return {
    users,
  };
};

const mapDispatchToProps = {};

function Leaderboard(props) {
  return (
    <>
      <Typography variant={'h4'}>Leaderboard</Typography>
      <Loading>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>No. Questions</TableCell>
                <TableCell>No. Answers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.users.map((user) => (
                <TableRow key={user.name}>
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell>{user.questions}</TableCell>
                  <TableCell>{user.answers}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Loading>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
