import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LevelsCard from "../components/LevelsCard";
import { useAuth } from "../context/authContext";

export default function Levels() {
  const { currentUser, URL } = useAuth();
  const [userLevels, setUserLevels] = useState([]);
  const [userLevelsFetched, setUserLevelsFetched] = useState(false);
  const [userLevelsError, setUserLevelsError] = useState(false);

  useEffect(() => {
    fetch(`${URL}levels/users/${currentUser.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserLevels(data);
        setUserLevelsFetched(true);
      })
      .catch((err) => setUserLevelsError(err));
  }, []);

  return (
    <section>
      <h1 className="title-text text-4xl">Levels</h1>
      {userLevelsFetched ? (
        <div className="container flex flex-col justify-start items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {userLevels.map((level) => (
              <LevelsCard data={level} />
            ))}
          </div>
          <Link to="/createlevel" className="auth-button">
            Create Level
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
