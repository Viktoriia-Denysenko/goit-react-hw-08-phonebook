import { CssVarsProvider } from '@mui/joy/styles';
import { Sheet, Typography, TextField, Button } from '@mui/joy';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 700,
    color: '#054DA7',
  },
  activeLink: {
    display: 'inline-block',
    textDecoration: 'none',
    fontWeight: 700,
    color: '#096BDE',
  },
};

export default function LoginView() {
  const isError = useSelector(authSelectors.getErrorLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      setError(true);
    }
  }, [isError]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          maxWidth: 350,
          minHeight: 'calc(100vh - 300px)',
          mx: 'auto',
          my: 4,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2">Sign in to continue</Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            name="email"
            type="email"
            value={email}
            placeholder="johndoe@email.com"
            label="Email"
            required
            onChange={handleChange}
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
            value={password}
            required
            onChange={handleChange}
            sx={{
              mt: 2,
            }}
          />
          {error && (
            <Typography
              sx={{
                color: '#ff0000',
                position: 'absolute',
                top: '248px',
                left: '25%',
                transform: 'translateX(-15%)',
              }}
            >
              Please, check your email and password!
            </Typography>
          )}
          <Button
            type="submit"
            color="primary"
            sx={{
              mt: 4,
            }}
          >
            Log in
          </Button>
        </form>
        <Typography
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
          Don't have an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
}
