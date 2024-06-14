import { useId } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

function ContactForm() {
  const dispatch = useDispatch();
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css["field-wrapper"]}>
          <label htmlFor={`${fieldId}-name`} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id={`${fieldId}-name`}
            className={css.field}
          ></Field>
          <ErrorMessage
            name="name"
            component="span"
            className={css["error-name"]}
          />
        </div>
        <div className={css["field-wrapper"]}>
          <label htmlFor={`${fieldId}-number`} className={css.label}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id={`${fieldId}-number`}
            className={css.field}
          ></Field>
          <ErrorMessage
            name="number"
            component="span"
            className={css["error-number"]}
          />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
