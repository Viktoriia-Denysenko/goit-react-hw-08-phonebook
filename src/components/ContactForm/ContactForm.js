import { useState } from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import { nanoid } from 'nanoid';
// import s from './ContactForm.module.css';
import {
  useCreateContactsMutation,
  useFetchContactsQuery,
} from '../../redux/contactSlice';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useFetchContactsQuery();

  const [createContact] = useCreateContactsMutation();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`${name} is not processed`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const getSameName = name => {
      return data.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
    };

    getSameName(contact.name)
      ? alert(`${contact.name} is already in contacts.`)
      : createContact(contact) && reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          maxWidth: 500,
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
            <b>Phonebook</b>
          </Typography>
          <Typography level="body2">Please, add your contacts</Typography>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            type="text"
            value={name}
            placeholder="John Doe"
            label="Name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <TextField
            name="number"
            type="tel"
            placeholder="093-111-22-33"
            label="Number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button
            type="submit"
            color="info"
            sx={{
              mt: 1,
            }}
          >
            Add contacts
          </Button>
        </form>
      </Sheet>
    </CssVarsProvider>
  );
}

export default ContactForm;
