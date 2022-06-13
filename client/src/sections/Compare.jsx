import React from "react";
import UserCard from "../components/UserCard";
import { useAuth } from "../context/authContext";
import { useParams } from "react-router-dom";

export default function Compare() {
  let { user1, user2 } = useParams();
  const [fetched, setFetched] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState(false);
  const { URL } = useAuth();

  React.useEffect(() => {
    fetch(`${URL}users/compare/${user1}/${user2}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFetched(true);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <section>
      <h1 className="title-text text-4xl">Comparison</h1>
      {fetched ? (
        <div className="container flex flex-col justify-start items-center">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {users.map((user) => (
              <UserCard data={user} name={user.username} />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
