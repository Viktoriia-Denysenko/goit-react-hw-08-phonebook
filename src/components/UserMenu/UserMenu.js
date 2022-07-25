import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div style={styles.container}>
      <span style={styles.name}>
        Welcome,
        {name}
      </span>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}
