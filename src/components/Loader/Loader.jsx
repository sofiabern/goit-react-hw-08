import { Oval } from "react-loader-spinner";

import css from "./Loader.module.css";

function Loader() {
  return (
    <Oval
      visible={true}
      height="60"
      width="60"
      color="#ba88f8"
      secondaryColor="#ffffff"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
    />
  );
}

export default Loader;
