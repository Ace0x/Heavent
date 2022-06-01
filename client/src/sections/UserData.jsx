import React from "react";
import { useAuth } from "../context/authContext";

export default function UserData() {
  const { currentUser } = useAuth();

  return (
    <section>
      {currentUser ? (
        <>
          <h1 className="title-text text-4xl">User Data</h1>
          <br />

          <p>
            <strong>Username: </strong> {currentUser.username}
          </p>
          <p>
            <strong>User ID: </strong> {currentUser.id}
          </p>
          <p>
            <strong>Played games: </strong> {currentUser.played}
          </p>
          <p>
            <strong>Victories </strong> {currentUser.victory}
          </p>
        </>
      ) : (
        <p>You are not logged in!</p>
      )}
    </section>
  );
}
