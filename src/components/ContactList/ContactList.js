import React from 'react';
import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import { useFetchContactsQuery } from '../../redux/contactSlice';
import ContactListItem from '../ContactListItem/ContactListItem';

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
  );
};

export default ContactList;
