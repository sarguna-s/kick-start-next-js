import Link from "next/link";
import { Card } from "components/card";

const HomePage = () => {
  return (
    <section>
      <h1 className="title"> WELCOME TO HOMEPAGE</h1>
      <p>React is a tool for building UI components.</p>
      <p>React creates a VIRTUAL DOM in memory.</p>

      <Card />
      <Link href="/list-page" className="submit">
        {" "}
        submit
      </Link>
    </section>
  );
};

export default HomePage;
