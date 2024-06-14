import AppBar from "../AppBar/AppBar";

import css from "./Layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}