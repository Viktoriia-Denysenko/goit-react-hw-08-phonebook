import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';

import LoginNav from './LoginNav';
import RegisterNav from './RegisterNav';
import authSelectors from '../redux/auth/auth-selectors';

export default function AppBarMenu() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Navigation />
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <div>
              <RegisterNav />
              <LoginNav />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
