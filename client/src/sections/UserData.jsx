import React from "react";
import UserCompare from "../components/compareInputs/UserCompare";
import { useAuth } from "../context/authContext";

export default function UserData() {
  const { currentUser, URL } = useAuth();
  const [winningUsers, setWinningUsers] = React.useState([]);
  const [playingUsers, setPlayingUsers] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    fetch(`${URL}users/mostvictories/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setWinningUsers(data);
      })
      .catch((err) => setError(err));

    fetch(`${URL}users/mostplayed/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPlayingUsers(data);
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <section>
      {currentUser ? (
        <>
          <div className="flex flex-col justify-center items-center my-4">
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
            <UserCompare user1={currentUser.id} />
          </div>
        </>
      ) : (
        <p>You are not logged in!</p>
      )}

      {winningUsers && (
        <div className="flex flex-col justify-center items-center my-4">
          <h1 className="title-text text-2xl">Users with most victories</h1>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {winningUsers.map((user) => (
              <div
                key={user.id}
                className="white-glassmorphism p-4 m-4 flex flex-col justify-start items-start col-span-1"
              >
                <h1 className="title-text text-xl">{user.username}</h1>
                <p className="text-gray-100">Username: {user.username}</p>
                <p className="text-gray-100">User ID: {user.id}</p>
                <p className="text-gray-100">Wins: {user.victory}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {playingUsers && (
        <div className="flex flex-col justify-center items-center my-4">
          <h1 className="title-text text-2xl">Users with most played games</h1>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {playingUsers.map((user) => (
              <div
                key={user.id}
                className="white-glassmorphism p-4 m-4 flex flex-col justify-start items-start col-span-1"
              >
                <h1 className="title-text text-xl">{user.username}</h1>
                <p className="text-gray-100">Username: {user.username}</p>
                <p className="text-gray-100">User ID: {user.id}</p>
                <p className="text-gray-100">Played: {user.played}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
