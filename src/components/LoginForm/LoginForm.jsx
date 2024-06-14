import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    // .unwrap()
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label >
          Email
          <Field type="email" name="email" />
        </label>
        <label >
          Password
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}