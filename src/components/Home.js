import "../css/Home.css";
import { Card, SortButton } from ".";
import { useState, useEffect } from "react";
import { userList } from "../API/Users";

const Home = () => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      const res = await userList();
      setData(res.data.results);
    };
    fetchData();
  }, []);

  const dataSorted = data.sort((a, b) => {
    const isReversed = sort === "asc" ? 1 : -1;
    return isReversed * a.name.last.localeCompare(b.name.last);
  });

  return (
    <>
      <SortButton onSortChange={setSort} />

      <div id="body">
        {dataSorted.length >= 0 ? (
          dataSorted.map(
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
