import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';
import { useDeleteContactsMutation } from '../../redux/contactSlice';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactsMutation();
  console.log(number);
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name.name),
      },
      children: `${name.name.split(' ')[0][0]}`,
    };
  }

  return (
    <li className={s.listItem}>
      <Stack direction="row" spacing={2}>
        <Avatar {...stringAvatar({ name })} />
      </Stack>
      <span className={s.itemElement}>{name}:</span>
      <span className={s.itemElement}>{number}</span>
      <button className={s.button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
