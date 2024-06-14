import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

import css from "./ContactsPage.module.css";

import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>My contacts</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />

      {isLoading && <Loader />}
      {isError && <Error>Oops! Please try again</Error>}
    </div>
  );
}

