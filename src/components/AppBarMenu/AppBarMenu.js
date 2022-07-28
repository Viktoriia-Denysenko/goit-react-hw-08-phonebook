import * as React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import LoginNav from '../LoginNav/LoginNav';
import RegisterNav from '../RegisterNav/RegisterNav';
import authSelectors from '../../redux/auth/auth-selectors';

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
