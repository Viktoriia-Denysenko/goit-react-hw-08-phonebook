const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsRefreshingCurrentUser = state => state.auth.isRefreshingCurrentUser;
const getErrorLogin = state => state.auth.errorLogin;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRefreshingCurrentUser,
  getErrorLogin,
};
export default authSelectors;
