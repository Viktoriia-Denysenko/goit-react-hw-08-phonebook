import React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import { NavLink } from 'react-router-dom';
import notebook from '../images/notebook18.jpg';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };
const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 700,
    color: '#7b1fa2',
  },
  activeLink: {
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 700,
    color: '#ba68c8',
  },
};

export default function HomeView() {
  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          minHeight: 'calc(100vh - 110px)',
          minWidth: 1000,
          mx: 'auto',
          my: 2,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          // alignItems: 'flex-start',
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
            my: 2,
            py: 3,
            px: 2,
          }}
        >
          <b>Welcome!</b>
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
          sx={{ alignSelf: 'center' }}
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
          sx={{ alignSelf: 'center' }}
        >
          Have not we met before?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
  // <div style={styles.container}>
  //   <h1 style={styles.title}>
  //     Welcome
  //     <span role="img" aria-label="Иконка приветствия">
  //       💁‍♀️
  //     </span>
  //   </h1>
  // </div>
}
