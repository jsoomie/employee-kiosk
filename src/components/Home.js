import "../css/Home.css";
import { Card } from ".";

const Home = () => {
  const image = "https://via.placeholder.com/200";
  const name = "Alice Wonderland";
  const phone = "1-555-5555";
  const email = "email@email.com";
  const dob = "01-01-1990";
  const id = "1";

  return (
    <div id="body">
      <Card
        id={id}
        image={image}
        name={name}
        phone={phone}
        email={email}
        dob={dob}
      />

      <Card
        id={id}
        image={image}
        name={name}
        phone={phone}
        email={email}
        dob={dob}
      />

      <Card
        id={id}
        image={image}
        name={name}
        phone={phone}
        email={email}
        dob={dob}
      />
    </div>
  );
};

export default Home;
