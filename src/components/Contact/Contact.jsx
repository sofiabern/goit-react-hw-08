import { FaUser, FaPhone } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import css from "./Contact.module.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";

import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

function Contact({ contact }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [initialName, setInitialName] = useState(contact.name);
  const [initialNumber, setInitialNumber] = useState(contact.number);
  const [editedContact, setEditedContact] = useState({ ...contact });
  const { id, name, number } = editedContact;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
    console.log(editedContact)
  };

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id))
      .then(() => {
        toast.success("Contact deleted successfully!");
      })
      .catch(() => {
        toast.error("Failed to delete contact.");
      });
    closeModal();
  };

  const handleUpdateContact = () => {
    if (editedContact.name === contact.name && editedContact.number === contact.number) {
      toast.warning("No changes detected.");
      return;
    }
    
    if (!editedContact.name || !editedContact.number) {
      toast.error("Name and number cannot be empty.");
      setEditedContact({
        ...editedContact,
        name: editedContact.name || initialName,
        number: editedContact.number || initialNumber,
      });
      return;
    }

    dispatch(
      updateContact({
        contactId: id,
        updatedContact: { name, number }
      })
    ).unwrap()
      .then(() => {
        toast.success("Contact updated successfully!");
        closeModal();
      })
      .catch((error) => {
        console.log(error)
        toast.error("Failed to update contact.");
      });
  };

  return (
    <div className={css["contact-wrapper"]}>
      <div className={css["contact-info"]}>
        <div className={css["input-wrapper"]}>
          <FaUser className={css.icon} color="#ba88f8" />
          <input
            className={css.input}
            type="text"
            name="name"
            value={editedContact.name}
            onChange={handleChange}
          />
        </div>
        <div className={css["input-wrapper"]}>
          <FaPhone className={css.icon} color="#ba88f8" />
          <input
            className={css.input}
            type="text"
            name="number"
            value={editedContact.number}
            onChange={handleChange}
          />
        </div>
      </div>
        <button className={`${css.button} ${css["button-edit"]}`}
          onClick={handleUpdateContact}
        >
          Save
        </button>
        <button className={`${css.button} ${css["button-delete"]}`} onClick={openModal}>
          <RxCross2/>
        </button>
      <ConfirmationModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onConfirm={handleDeleteContact}
      />
    </div>
  );
}

export default Contact;
