import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

export default function LoginNav() {
  return (
    <div>
      <NavLink
        to="/login"
        // exact
        style={styles.link}
        // activeStyle={styles.activeLink}
      >
        Log in
      </NavLink>
      <Outlet />
    </div>
  );
}
