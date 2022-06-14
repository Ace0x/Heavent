import React from "react";
import TextInput from "../inputs/TextInput";
import { Navigate } from "react-router-dom";

export default function LevelStatsCompare({ user1, level }) {
  const [user2, setUser2] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [navigator, setNavigator] = React.useState(false);

  const onCompareClick = () => {
    if (user1 && user2 && level) {
      setNavigator(true);
    } else {
      setError("Please enter a user ID");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <TextInput title="Compare this level stats with another user" setState={setUser2} type="number" className="compare-input"/>
      <button className="just-button" onClick={() => onCompareClick()}>
        Compare
      </button>
      {navigator && <Navigate to={`/levelstats/compare/${user1}/${user2}/${level}`}></Navigate>}
    </div>
  );
}
