import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

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
