import React from "react";

export default function LevelsCard({ data }) {
  return (
    <div className="white-glassmorphism col-span-1 p-4 m-4 flex flex-col justify-start items-start">
      <h1 className="title-text text-2xl">{data.name}</h1>
      <p className="text-gray-900">Level ID: {data.id}</p>
      <p className="text-gray-900">Level Data: {data.levelData}</p>
    </div>
  );
}
