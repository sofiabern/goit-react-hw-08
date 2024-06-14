import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css['contact-list']}>
      <AnimatePresence>
        {contacts.map(contact => (
          <motion.li
            key={contact.id}
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Contact contact={contact} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default ContactList;
