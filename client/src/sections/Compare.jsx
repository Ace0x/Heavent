import React from "react";
import UserCard from "../components/UserCard";
import { useAuth } from "../context/authContext";
import { useParams } from "react-router-dom";
import DoughnutChart from "../components/charts/DoughnutChart";

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
            <div className="flex flex-col col-span-1 md:col-span-2 white-glassmorphism p-4 m-4 justify-center items-center">
              <h1 className="title-text text-xl">Playing numbers</h1>
              <DoughnutChart
                chartData={{
                  labels: [users[0].username, users[1].username],
                  datasets: [
                    {
                      label: "User VS User",
                      data: [users[0].played, users[1].played],
                      backgroundColor: [
                        "rgb(30, 99, 32)",
                        "rgb(255, 162, 05)",
                      ],
                      hoverOffset: 4,
                    },
                  ],
                }}
                options={{
                  rotation: 270,
                  circumference: 180,
                }}
              />
            </div>
            <div className="flex flex-col col-span-1 md:col-span-2 white-glassmorphism p-4 m-4 justify-center items-center">
              <h1 className="title-text text-xl">Winning numbers</h1>
              <DoughnutChart
                chartData={{
                  labels: [users[0].username, users[1].username],
                  datasets: [
                    {
                      label: "User VS User",
                      data: [users[0].victory, users[1].victory],
                      backgroundColor: [
                        "rgb(5, 99, 255)",
                        "rgb(255, 99, 5)",
                      ],
                      hoverOffset: 4,
                    },
                  ],
                }}
                options={{
                  rotation: 270,
                  circumference: 180,
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
