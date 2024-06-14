import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import css from "./Error.module.css";

export default function Error({ children }) {
  useEffect(() => {
    toast.error(children);
  }, []);
  return <ToastContainer />;
}
