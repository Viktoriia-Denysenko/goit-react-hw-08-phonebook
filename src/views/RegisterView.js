import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

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

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          maxWidth: 350,
          minHeight: 'calc(100vh - 200px)',
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
          <Typography level="body2">Sign up to continue</Typography>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            name="name"
            type="text"
            value={name}
            placeholder="John Doe"
            label="Name"
            onChange={handleChange}
          />
          <TextField
            name="email"
            type="email"
            value={email}
            placeholder="johndoe@email.com"
            label="Email"
            onChange={handleChange}
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
            value={password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            color="info"
            sx={{
              mt: 1,
            }}
          >
            Sign up
          </Button>
        </form>
        <Typography
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
          Have you already got an account?
        </Typography>
      </Sheet>
    </CssVarsProvider>
  );
}
