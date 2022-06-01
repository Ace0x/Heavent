import React from "react";
import { useAuth } from "../context/authContext";

export default function LevelsCard({ data }) {
  const { URL } = useAuth();

  const onDeleteClick = () => {
    fetch(URL + "levels/" + data.id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };

  return (
    <div className="white-glassmorphism col-span-1 p-4 m-4 flex flex-col justify-start items-start">
      <h1 className="title-text text-2xl">{data.name}</h1>
      <p className="text-gray-100">Level ID: {data.id}</p>
      <p className="text-gray-100">
        Level Data: {JSON.stringify(data.levelData)}
      </p>
      <div className="delete-button" onClick={() => onDeleteClick()}>
        Delete
      </div>
    </div>
  );
}
