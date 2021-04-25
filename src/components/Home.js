import "../css/Home.css";
import { Card, SortButton } from ".";
import { useState, useEffect } from "react";
import { userList } from "../API/Users";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await userList();
      setData(res.data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <SortButton />

      <div id="body">
        {data.length > 0 ? (
          data.map(
            ({
              login: { uuid },
              picture: { large: image },
              name: { first: firstName },
              name: { last: lastName },
              email,
              phone,
              dob: { date },
            }) => (
              <Card
                key={uuid}
                image={image}
                firstName={firstName}
                lastName={lastName}
                phone={phone}
                email={email}
                dob={date}
              />
            )
          )
        ) : (
          <p>No employee in database!</p>
        )}
      </div>
    </>
  );
};

export default Home;
