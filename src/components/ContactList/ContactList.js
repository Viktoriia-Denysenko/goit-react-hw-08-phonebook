import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import { CssVarsProvider } from '@mui/joy/styles';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { List } from '@mui/material';
// import s from './ContactList.module.css';
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
    <>
      <CssVarsProvider>
        <Sheet
          sx={{
            maxWidth: 400,
            mx: 'auto',
            my: 4,
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Contacts</b>
            </Typography>
            <Typography level="body2">
              Please, find out your contacts
            </Typography>
          </div>
        </Sheet>
      </CssVarsProvider>
      <List component="div">
        {data &&
          visibleContacts.map(({ id, name, number }) => (
            <ContactListItem key={id} id={id} name={name} number={number} />
          ))}
      </List>
    </>
  );
};

export default ContactList;
