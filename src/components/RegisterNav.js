import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#7b1fa2',
  },
  activeLink: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#ba68c8',
  },
};

export default function RegisterNav() {
  return (
    // <Button color="primary" size="small">
    <NavLink
      to="/register"
      exact="true"
      style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
    >
      Sign up
    </NavLink>
    // {/* <Outlet /> */}
    // </Button>
  );
}
