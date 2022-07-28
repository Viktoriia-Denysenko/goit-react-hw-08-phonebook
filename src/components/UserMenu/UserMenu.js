import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/joy/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/joy/Typography';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
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
        <Typography sx={{ px: 1 }} color="primary" level="h6" component="h6">
          Welcome,
          <b> {name}</b>
        </Typography>
        <IconButton
          color="primary"
          variant="soft"
          type="button"
          onClick={handleLogOut}
        >
          <LogoutIcon />
        </IconButton>
      </div>
    </>
  );
}
