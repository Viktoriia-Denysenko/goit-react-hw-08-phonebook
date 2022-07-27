import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu/UserMenu';
import LoginNav from './LoginNav';
import RegisterNav from './RegisterNav';
import authSelectors from '../redux/auth/auth-selectors';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

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
