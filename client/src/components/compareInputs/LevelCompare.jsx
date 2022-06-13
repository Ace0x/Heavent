import React from "react";
import TextInput from "../inputs/TextInput";
import { Navigate } from "react-router-dom";

export default function LevelCompare({ level1 }) {
  const [level2, setLevel2] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [navigator, setNavigator] = React.useState(false);

  const onCompareClick = () => {
    if (level1 && level2) {
      setNavigator(true);
    } else {
      setError("Please enter a level ID");
    }
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <TextInput title="Level" setState={setLevel2} type="number" />
      <button className="auth-button" onClick={() => onCompareClick()}>
        Compare
      </button>
      {navigator && <Navigate to={`/level/compare/${level1}/${level2}`}></Navigate>}
    </div>
  );
}
