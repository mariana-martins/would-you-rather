import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

function Loading(props) {
  return props.loading ? (
    <Grid container item justify={'center'}>
      <CircularProgress />
    </Grid>
  ) : (
    props.children
  );
}

export default connect(mapStateToProps)(Loading);
