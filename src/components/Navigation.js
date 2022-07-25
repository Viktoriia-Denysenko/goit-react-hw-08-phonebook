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

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      style={styles.link}
      // activestyle={styles.activeLink}
    >
      Main Page
    </NavLink>

    <NavLink
      to="/contacts"
      // exact
      style={styles.link}
      // activeStyle={styles.activeLink}
    >
      Contacts
    </NavLink>
    <Outlet />
  </nav>
);

export default Navigation;
