import React, { useEffect } from "react";
import LevelsCard from "../components/LevelsCard";
import { useAuth } from "../context/authContext";
import { useFetch } from "../context/fetchContext";

export default function Levels() {
  const [levels, setLevels] = React.useState([]);

  const { currentUser } = useAuth();
  const { getUserLevels, userLevels } = useFetch();

  useEffect(() => {
    getUserLevels(currentUser.id);
  }, []);

  return (
    <section>
      <h1 className="title-text text-4xl">Levels</h1>
      <div className="container flex flex-col justify-start items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {userLevels.map((level) => (
            <LevelsCard data={level} />
          ))}
        </div>
      </div>
    </section>
  );
}
