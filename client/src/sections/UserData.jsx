import React from "react";
import UserCompare from "../components/UserCompare";
import { useAuth } from "../context/authContext";

export default function UserData() {
  const { currentUser } = useAuth();

  return (
    <section>
      {currentUser ? (
        <>
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
          <UserCompare user1={currentUser.id} />
        </>
      ) : (
        <p>You are not logged in!</p>
      )}
    </section>
  );
}
