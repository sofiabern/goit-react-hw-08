import React from "react";
import Modal from "react-modal";

import css from "./ConfirmationModal.module.css"

const customStyles = {
  overlay: {
    backgroundColor: "#e9d8ffb6",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid #ba88f8",
    borderRadius: "8px",
    backgroundColor: '#e9d8ff',
  },
};

Modal.setAppElement("#root");

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Confirm Deletion"
    >
      <h2 className={css.text}>Are you sure you want to delete this contact?</h2>
      <div className={css["btn-wrapper"]}>
        <button onClick={onConfirm} className={css.btn}>Yes</button>
        <button onClick={onRequestClose} className={css.btn}>No</button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
