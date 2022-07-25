import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Fillter/Fillter';

export function ContactsView() {
  return (
    <div
      style={{
        minWidth: '400px',
        display: 'inline-block',
        padding: '10px',
        height: '100vh',
        margin: '0 auto',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
