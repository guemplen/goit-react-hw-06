import styles from './ContactList.module.css';
import ContactItem from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = id => {
    onDelete(id);
  };
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
