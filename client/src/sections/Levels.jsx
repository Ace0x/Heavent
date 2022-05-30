import React, { useEffect, useState } from "react";
import LevelsCard from "../components/LevelsCard";
import { useAuth } from "../context/authContext";
import { useFetch } from "../context/fetchContext";

export default function Levels() {
  const { currentUser, URL } = useAuth();
  const [userLevels, setUserLevels] = useState([]);
  const [userLevelsFetched, setUserLevelsFetched] = useState(false);
  const [userLevelsError, setUserLevelsError] = useState(false);

  useEffect(() => {}, []);

  return (
    <section>
      <h1 className="title-text text-4xl">Levels</h1>
      {userLevelsFetched ? (
        <div className="container flex flex-col justify-start items-start">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {userLevels.map((level) => (
              <LevelsCard data={level} />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}
