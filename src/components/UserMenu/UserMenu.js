import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import IconButton from '@mui/joy/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/joy/Typography';
import Filter from 'components/Filter/Filter';

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
    <>
      <Filter />
      <div style={styles.container}>
        <Typography color="info" level="h7" component="h7">
          Welcome,
          <b> {name}</b>
        </Typography>
        {/* <span style={styles.name}>
          Welcome,
          {name}
        </span> */}
        <IconButton
          color="info"
          variant="soft"
          type="button"
          onClick={handleLogOut}
        >
          <LogoutIcon />
        </IconButton>
        {/* <button type="button" onClick={handleLogOut}>
          Log out
        </button> */}
      </div>
    </>
  );
}
