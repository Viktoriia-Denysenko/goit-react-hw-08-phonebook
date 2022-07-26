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
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        to="/"
        exact="true"
        style={styles.link}
        // activestyle={styles.activeLink}
      >
        Main Page
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact="true"
          style={styles.link}
          // activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
      {/* <Outlet /> */}
    </nav>
  );
};

export default Navigation;
