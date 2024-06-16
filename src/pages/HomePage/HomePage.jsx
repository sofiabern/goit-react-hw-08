import PageTitle from "../../components/PageTitle/PageTitle";

import css from "./HomePage.module.css"

export default function HomePage() {
  return (
    <div className="">
      <PageTitle>
        Welcome to Your Personal Phone Book
      </PageTitle>
      <p className={css.text}>
        
        This intuitive and efficient tool is designed to help you keep all your contacts organized and easily accessible. Whether you need to store personal contacts, business associates, or emergency numbers, our phone book makes it simple to manage and retrieve contact information. Stay connected, stay organized, and make your life easier with our comprehensive phone book application. Happy managing!
        
      </p>
    </div>
  );
}
