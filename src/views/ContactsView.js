import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Sheet from '@mui/joy/Sheet';
// import Filter from 'components/Filter/Filter';

export default function ContactsView() {
  return (
    <Sheet
      sx={{
        minHeight: 'calc(100vh - 110px)',
        minWidth: 350,
        mx: 'auto',
        my: 2,
        py: 3,
        px: 2,
        display: 'flex',
        justifyContent: 'space-around',

        gap: 3,
        borderRadius: 'sm',
        boxShadow: 'md',
      }}
    >
      <ContactForm />
      {/* <Filter /> */}
      <ContactList />
    </Sheet>

  );
}
