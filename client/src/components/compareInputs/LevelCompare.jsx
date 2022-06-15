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
    <div className="flex flex-col justify-center items-center">
      <TextInput title="Compare levels with ID" setState={setLevel2} type="number" />
      <button className="just-button" onClick={() => onCompareClick()}>
        Compare
      </button>
      {navigator && <Navigate to={`/levels/compare/${level1}/${level2}`}></Navigate>}
    </div>
  );
}
