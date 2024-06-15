import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useId } from "react";
import { useDispatch } from "react-redux";

import css from "./LoginForm.module.css";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { logIn } from "../../redux/auth/operations";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(data => {

        toast.success('Login was successful!');
      })
      .catch(err => {

        toast.error('An error occurred during login');
      });

    actions.resetForm();
  };

  return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form autoComplete="off" className={css.form}>
          <div className={css["field-wrapper"]}>
            <label htmlFor={`${fieldId}-email`} className={css.label}>
              Email
            </label>
            <Field
              type="text"
              name="email"
              id={`${fieldId}-email`}
              className={css.field}
            ></Field>
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>
          <div className={css["field-wrapper"]}>
            <label htmlFor={`${fieldId}-password`} className={css.label}>
              Password
            </label>
            <Field
              type="password"
              name="password"
              id={`${fieldId}-password`}
              className={css.field}
            ></Field>
            <ErrorMessage
              name="password"
              component="span"
              className={css.error}
            />
          </div>
          <button type="submit" className={css.btn}>Log In</button>
        </Form>
      </Formik>
  );
}
