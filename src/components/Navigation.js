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
      {/* <Outlet /> */}
    </nav>
  );
};

export default Navigation;
