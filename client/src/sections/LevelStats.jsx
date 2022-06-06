import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function LevelStats() {
  let { levelId, name } = useParams();
  const { currentUser, URL } = useAuth();
  const [levelStats, setLevelStats] = React.useState([]);
  const [statsFetched, setStatsFetched] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    fetch(`${URL}level_stats/${currentUser.id}/${levelId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLevelStats(data);
        setStatsFetched(true);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <section>
      <h1 className="title-text text-4xl">Level Stats</h1>
      {levelStats ? (
        <div>
          <p>Level ID: {}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
