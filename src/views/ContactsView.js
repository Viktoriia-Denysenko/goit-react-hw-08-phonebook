import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
// import Filter from 'components/Filter/Filter';

export default function ContactsView() {
  return (
    <div
      style={{
        minWidth: '400px',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px',
        height: '100vh',
        margin: '0 auto',
      }}
    >
      <ContactForm />
      {/* <Filter /> */}
      <ContactList />
    </div>
  );
}
