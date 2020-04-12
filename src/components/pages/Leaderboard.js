import React from 'react';
import { connect } from 'react-redux';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Loading from '../Loading';
import BaseContainer from '../BaseContainer';

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
    <BaseContainer>
      <Grid container item justify={'center'} xs={12}>
        <Typography variant={'h4'} style={{ paddingBottom: 15 }}>
          Would you rather?
        </Typography>
      </Grid>
      <Grid container item justify={'center'} xs={12}>
        <Typography variant={'h6'} style={{ paddingBottom: 15 }}>
          Leaderboard
        </Typography>
      </Grid>
      <Grid container item justify={'center'} xs={12}>
        <Loading>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold' }}>User</TableCell>
                  <TableCell align={'center'} style={{ fontWeight: 'bold' }}>
                    No. Questions
                  </TableCell>
                  <TableCell align={'center'} style={{ fontWeight: 'bold' }}>
                    No. Answers
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.users.map((user) => (
                  <TableRow key={user.name}>
                    <TableCell component="th" scope="row">
                      <Grid container item alignItems={'center'}>
                        <Avatar alt={user.name} src={user.avatarURL} />
                        <span style={{ paddingLeft: 10 }}>{user.name}</span>
                      </Grid>
                    </TableCell>
                    <TableCell align={'center'}>{user.questions}</TableCell>
                    <TableCell align={'center'}>{user.answers}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Loading>
      </Grid>
    </BaseContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
