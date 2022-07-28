import React from 'react';
import { Typography, Box } from '@mui/joy';
import { FixedSizeList } from 'react-window';
import ContactList from 'components/ContactList/ContactList';

function ContactListSlider() {
  return (
    <Box
      sx={{
        minWidth: 350,
        maxHeight: 340,
        mx: 'auto',
        my: 4,
        py: 3,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 'sm',
        boxShadow: 'md',
        mt: '20px',
        mr: '0px',
        ml: '0px',
        pt: '5px',
      }}
    >
      <Typography level="h4" component="h1">
        <b>Contacts</b>
      </Typography>
      <Typography level="body2">Please, find out your contacts</Typography>
      <FixedSizeList
        height={275}
        width={360}
        itemSize={46}
        itemCount={1}
        overscanCount={5}
      >
        {ContactList}
      </FixedSizeList>
    </Box>
  );
}

export default ContactListSlider;
