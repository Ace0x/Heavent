import React from "react";

export default function Info() {
  return (
    <section id="info" >
      <h1 className="title-text m-10 text-4xl text-center">What's HeaVen't?</h1>
      <p className="subtitle-text text-lg text-center">
        Heaven't is a web game developed with the objective of being an
        introduction to videogame design in mind. The user is able to design
        their own levels and play levels designed by other players with the main
        player, Godn't.
        <br />
        <br />
        <em className="title-text text-6xl text-center m-10 p-10">
          "Create them, play them, beat them"
        </em>
        <br />
        <br />
        In addition, using the website you'll be able to see the general stats
        and user-specific stats for each level, and compare your stats against
        other's playthroughs.
      </p>
    </section>
  );
}
