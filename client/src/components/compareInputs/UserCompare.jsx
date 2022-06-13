import React from "react";
import TextInput from "../inputs/TextInput";
import { Navigate } from "react-router-dom";

export default function UserCompare({ user1 }) {
  const [user2, setUser2] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [navigator, setNavigator] = React.useState(false);

  const onCompareClick = () => {
    if (user1 && user2) {
      setNavigator(true);
    } else {
      setError("Please enter a user ID");
    }
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <TextInput title="User" setState={setUser2} type="number" />
      <button className="auth-button" onClick={() => onCompareClick()}>
        Compare
      </button>
      {navigator && <Navigate to={`/comparelevels/${level1}/${level2}`}></Navigate>}
    </div>
  );
}
