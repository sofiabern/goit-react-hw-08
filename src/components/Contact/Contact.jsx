import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id))
    .then(() => {
      toast.success('Contact deleted successfully!');
    })
      .catch(error => {
        toast.error('Failed to delete contact.');
      });

  };
  return (
    <div className={css["contact-wrapper"]}>
      <div className={css["contact-info"]}>
        <p className={css["contact-text"]}>
          <FaUser className={css.icon} color="#ba88f8" />
          {contact.name}
        </p>
        <p className={css["contact-text"]}>
          <FaPhone className={css.icon} color="#ba88f8" />
          {contact.number}
        </p>
      </div>
      <button className={css.button} onClick={handleDeleteContact}>Delete</button>
    </div>
  );
}

export default Contact;
