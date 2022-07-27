import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { NavLink } from 'react-router-dom';
import notebook from '../images/notebook18.jpg';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 700,
    color: '#5F35AE',
  },
  activeLink: {
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 700,
    color: '#814DDE',
  },
};

export default function HomeView() {
  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          minHeight: 'calc(100vh - 110px)',
          minWidth: 350,
          mx: 'auto',
          my: 2,
          py: 3,
          px: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',

          gap: 3,
          borderRadius: 'sm',
          boxShadow: 'md',
          backgroundImage: `url(${notebook})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Typography
          level="h1"
          component="h1"
          sx={{
            mx: 'auto',
            ml: '350px',
            mt: 4,
          }}
        >
          Welcome
          <br />
          to your
          <br />
          Phonebook!
        </Typography>
        <Typography
          level="h2"
          component="h2"
          endDecorator={
            <NavLink
              to="/register"
              exact="true"
              style={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Sign up
            </NavLink>
          }
          fontSize="sm"
          sx={{ alignSelf: 'center', mr: '50px' }}
        >
          Are you here for the first time?
        </Typography>
        <Typography
          level="h2"
          component="h2"
          endDecorator={
            <NavLink
              to="/login"
              exact="true"
              style={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              Log in
            </NavLink>
          }
          fontSize="sm"
          sx={{ alignSelf: 'center', mr: '50px' }}
        >
          Have not we met before?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
}
