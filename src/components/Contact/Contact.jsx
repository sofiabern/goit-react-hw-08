import { FaUser, FaPhone } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import css from "./Contact.module.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

function Contact({ contact }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  const dispatch = useDispatch();

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
      <button className={css.button} onClick={openModal}>
      <RxCross2 />
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
