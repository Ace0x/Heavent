import React from "react";
import TextInput from "./inputs/TextInput";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

export default function LevelCreator() {
  const [levelName, setLevelName] = React.useState("");
  const [levelDifficulty, setLevelDifficulty] = React.useState({});
  const [maxDeaths, setMaxDeaths] = React.useState(0);
  const [error, setError] = React.useState(false);
  const [levelCreated, setLevelCreated] = React.useState(false);

  const { URL, currentUser } = useAuth();

  const onLevelCreate = () => {
    console.log("Level Created");
    if (levelName && levelDifficulty && maxDeaths) {
      fetch(`${URL}levels`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: currentUser.id,
          name: levelName,
          levelData: "{'diff': 10}",
        }),
      })
        .then((res) => res.json())
        .then(setLevelCreated(true))
        .catch((err) => setError(err));
    }
  };

  return (
    <div className="mt-4 container flex flex-col justify-start items-start">
      <h1 className="title-text">Create Level</h1>
      <TextInput title="Level Name" setState={setLevelName} type="text" />
      <TextInput
        title="Level Difficulty"
        setState={setLevelDifficulty}
        type="number"
      />
      <TextInput
        title="Level Max Deaths"
        setState={setMaxDeaths}
        type="number"
      />
      <button className="auth-button" onClick={() => onLevelCreate()}>
        Create Level
      </button>
      {error && <p className="text-red-500 my-4">{error}</p>}
      {levelCreated && <Navigate to="/mylevels"></Navigate>}
    </div>
  );
}
