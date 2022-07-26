import React from 'react';
import { NavLink } from 'react-router-dom';

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

export default function RegisterNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact="true"
        style={styles.link}
        // activestyle={styles.activeLink}
      >
        Sign in
      </NavLink>
      {/* <Outlet /> */}
    </div>
  );
}