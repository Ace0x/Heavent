import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import LevelCompare from "./compareInputs/LevelCompare";

export default function LevelsCard({ data, isOwner = false }) {
  const { URL } = useAuth();
  const [reload, setReload] = React.useState(false);
  const [likes, setLikes] = React.useState(data.likes);
  const [toStats, setToStats] = React.useState("");

  const onDeleteClick = () => {
    fetch(URL + "levels/" + data.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(setReload(true))
      .catch((error) => console.error(error));
  };

  const onLikeClick = () => {
    fetch(URL + "levels/" + data.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLikes(data.likes);
      })
      .catch((error) => console.error(error));
  };

  const onStatsClick = () => {
    setToStats("/levelstats/" + data.id + "/" + data.name);
  };

  return (
    <div className="white-glassmorphism col-span-1 p-4 m-4 flex flex-col justify-start items-start" key={data.id}>
      <h1 className="title-text text-2xl">{data.name}</h1>
      <p className="text-gray-100">Level ID: {data.id}</p>
      <p className="text-gray-100">Total clears: {data.totalVictories}</p>
      <p className="text-gray-100">Total Deaths: {data.totalDeaths}</p>
      <p className="text-gray-100">Total enemies: {data.totalEnemies}</p>
      <div className="flex flex-row justify-center items-center">
        <button onClick={() => onLikeClick()}>
          <AiFillHeart className="text-red-500 text-xl hover:text-green-400 hover:animate-spin transition-colors" />
        </button>
        <p className="text-gray-100 px-2">{likes}</p>
      </div>

      {isOwner ? (
        <div className="delete-button" onClick={() => onDeleteClick()}>
          Delete 
        </div>
      ) : (
        <div className="auth-button" onClick={() => onStatsClick()}>
          My Stats
        </div>
      )}
      <LevelCompare level1={data.id} />
      {reload && <Navigate to="/"></Navigate>}
      {toStats && <Navigate to={toStats}></Navigate>}
    </div>
  );
}
