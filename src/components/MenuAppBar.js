import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { unsetAuthedUser } from '../actions/authedUser';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const mapStateToProps = (state) => {
  return {
    authedUser: state.authedUser ? state.users[state.authedUser] : null,
  };
};

const mapDispatchToProps = {
  unsetAuthedUser,
};

function MenuAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    props.unsetAuthedUser();
    handleClose();
  };
  const auth = props.authedUser !== null;
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Link
            className={classes.title}
            component={RouterLink}
            to={'/home'}
            color="inherit"
            variant="h6"
          >
            Would you rather?
          </Link>

          {auth && (
            <>
              <Link
                component={RouterLink}
                to={'/leaderboard'}
                className={classes.title}
                color="inherit"
                variant="body1"
              >
                Leaderboard
              </Link>
              <Link
                component={RouterLink}
                to={'/add'}
                className={classes.title}
                color="inherit"
                variant="body1"
              >
                New
              </Link>
            </>
          )}

          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar
                  alt={props.authedUser.name}
                  src={props.authedUser.avatarURL}
                />
                <Typography variant={'body2'}>
                  {props.authedUser.name}
                </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuAppBar);
