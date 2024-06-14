import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  return (
    <div>
      <PageTitle>
        Welcome to Your Personal Phone Book{" "}
        <span role="img" aria-label="Greeting icon">
          📞
        </span>
      </PageTitle>
      <p>
        Welcome to your ultimate phone book application! This intuitive and efficient tool is designed to help you keep all your contacts organized and easily accessible. Whether you need to store personal contacts, business associates, or emergency numbers, our phone book makes it simple to manage and retrieve contact information.
      </p>
      <p>
        With features such as quick search, contact grouping, and easy editing, you'll never struggle to find a number again. Start adding your contacts now and experience the convenience of having all your important numbers in one secure place. Our user-friendly interface ensures that even the least tech-savvy users can navigate with ease.
      </p>
      <p>
        Stay connected, stay organized, and make your life easier with our comprehensive phone book application. Happy managing!
      </p>
    </div>
  );
}
