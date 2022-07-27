import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';

import Typography from '@mui/joy/Typography';

import Box from '@mui/joy/Box';
import { List } from '@mui/material';

import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import { useFetchContactsQuery } from '../../redux/contactSlice';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data } = useFetchContactsQuery();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (data) {
      return data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Box sx={{ minWidth: 300, mt: '20px', pt: '5px' }}>
      <Typography level="h4" component="h1">
        <b>Contacts</b>
      </Typography>
      <Typography level="body2">Please, find out your contacts</Typography>
      <List
        variant="outlined"
        sx={{
          minWidth: 240,
          borderRadius: 'sm',
          '--List-decorator-width': '70px',
          '--List-item-paddingTop': '1rem',
        }}
      >
        {data &&
          visibleContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
      </List>
    </Box>
  );
};

export default ContactList;
