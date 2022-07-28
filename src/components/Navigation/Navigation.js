import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    fontSize: 17,
    color: '#054DA7',
  },
  activeLink: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    fontSize: 17,
    color: '#096BDE',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact="true"
        style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
      >
        Main Page
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact="true"
          style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
