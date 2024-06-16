import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

import css from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectFilter);



  return (
      <input
        className={css.input}
        placeholder="Search by name or phone number"
        type="text"
        value={nameFilter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
  );
}

export default SearchBox;
