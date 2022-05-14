import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/authActions';


export default function TopBar(props) {
  
  const isAuthenticated = useSelector((state) => state.auth.token !== null && typeof state.auth.token !== 'undefined');
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(actions.authLogout());
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Iris Species Predictor
          </Typography>
          {isAuthenticated ? <Button color="inherit" onClick={handleClick}>Logout</Button> : null}
          {isAuthenticated ? <Button color="inherit" href="/update_password/">Change Password</Button> : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
