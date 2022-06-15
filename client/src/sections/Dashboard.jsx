import React from "react";
import BarChart from "../components/charts/BarChart";
import { useAuth } from "../context/authContext";
import DoughnutChart from "../components/charts/DoughnutChart";

const randomHexGenerator = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export default function Dashboard() {
  const { currentUser, URL } = useAuth();
  const [winningUsers, setWinningUsers] = React.useState([]);
  const [playingUsers, setPlayingUsers] = React.useState([]);
  const [likesLevels, setLikesLevels] = React.useState([]);
  const [error, setError] = React.useState(false);

  const colorList = [];

  React.useEffect(() => {
    fetch(`${URL}users/mostvictories/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setWinningUsers(data);
      })
      .catch((err) => setError(err));

    fetch(`${URL}users/mostplayed/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPlayingUsers(data);
      })
      .catch((err) => setError(err));
    fetch(`${URL}levels/mostliked/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLikesLevels(data);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <section>
      <h1 className="title-text text-4xl">General Data</h1>
      {winningUsers && playingUsers ? (
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="col-span-1 md:col-span-2 p-4 m-4 white-glassmorphism">
            <h2 className="title-text text-2xl">Leaderboard</h2>
            <BarChart
              chartData={{
                labels: winningUsers.map((user) => user.username),
                datasets: [
                  {
                    label: "Wins",
                    backgroundColor: "rgba(75,192,192,1)",
                    borderColor: "rgba(0,0,0,1)",
                    borderWidth: 2,
                    data: winningUsers.map((user) => user.victory),
                    color: "#fff",
                  },
                ],
              }}
              title="Most Victories"
            />
          </div>
          <div className="col-span-1 p-4 m-4 white-glassmorphism">
            <h2 className="title-text text-2xl">Best Levels</h2>
            <DoughnutChart
              chartData={{
                labels: likesLevels.map((level) => level.name),
                datasets: [
                  {
                    label: "Most Liked levels",
                    data: likesLevels.map((level) => level.likes),
                    backgroundColor: likesLevels.map((level) =>
                      randomHexGenerator()
                    ),
                    hoverOffset: 4,
                    color: "white",
                  },
                ],
              }}
              options={{
                legend: {
                  labels: {
                    fontColor: "white", //set your desired color
                  },
                },
              }}
            />
          </div>
        </div>
      ) : (
        <p>Loading dashboard...</p>
      )}
    </section>
  );
}
