import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css"

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.list}>
      <NavLink to="/" className={css.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/tasks" className={css.link}>
          Tasks
        </NavLink>
      )}
    </nav>
  );
}
