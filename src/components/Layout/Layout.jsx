import AppBar from "../AppBar/AppBar";

import css from "./Layout.module.css"
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <ToastContainer />
      {children}
    </div>
  );
}