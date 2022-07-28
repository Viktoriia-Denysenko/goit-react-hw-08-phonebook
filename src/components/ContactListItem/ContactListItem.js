import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Typography,
  ListDivider,
} from '@mui/joy';
import { useDeleteContactsMutation } from '../../redux/contactSlice';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactsMutation();

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

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
    <>
      <ListItem
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          mt: 0.5,
        }}
      >
        <ListItemDecorator
          sx={{ alignItems: 'center', justifyContent: 'center', mt: '5px' }}
        >
          <Avatar
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
            {...stringAvatar({ name })}
          />
        </ListItemDecorator>
        <ListItemContent>
          <Typography
            sx={{
              display: 'flex',
              alignSelf: 'flex-start',
            }}
          >
            {name}:
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              alignSelf: 'flex-start',
            }}
            level="body1"
            noWrap
          >
            {number}
          </Typography>
        </ListItemContent>
        <IconButton
          color="primary"
          aria-label="delete"
          onClick={() => deleteContact(id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <ListDivider />
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
