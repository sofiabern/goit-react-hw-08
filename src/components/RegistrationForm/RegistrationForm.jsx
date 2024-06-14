import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useId } from "react";
import { useDispatch } from "react-redux";

import { register } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={RegistrationSchema}
    >
      <Form autoComplete="off" className={css.form}>
        <div className={css["field-wrapper"]}>
          <label className={css.label} htmlFor={`${fieldId}-name`}>
            Username
          </label>
          <Field
            type="text"
            name="name"
            className={css.field}
            id={`${fieldId}-name`}
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css["field-wrapper"]}>
          <label className={css.label} htmlFor={`${fieldId}-email`}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            className={css.field}
            id={`${fieldId}-email`}
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>
        <div className={css["field-wrapper"]}>
          <label className={css.label} htmlFor={`${fieldId}-password`}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            className={css.field}
            id={`${fieldId}-password`}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </div>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
