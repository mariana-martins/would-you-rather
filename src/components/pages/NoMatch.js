import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BaseContainer from '../BaseContainer';

function NoMatch() {
  return (
    <BaseContainer>
      <Grid container item justify={'center'} xs={12}>
        <Typography variant={'h4'} style={{ paddingBottom: 15 }}>
          Would you rather?
        </Typography>
      </Grid>
      <Grid container item justify={'center'} xs={12}>
        <Typography
          variant={'h6'}
          style={{ paddingBottom: 15 }}
          color={'primary'}
        >
          Ops! Page not found.
        </Typography>
      </Grid>
    </BaseContainer>
  );
}

export default NoMatch;
