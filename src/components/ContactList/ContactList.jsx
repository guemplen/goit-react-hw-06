import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, deleteContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';
import ContactItem from '../Contact/Contact';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
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

