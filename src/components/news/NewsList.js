import React from "react";
import GamesList from "./GamesList";

const NewsList = ({ news }) =>
  <div>
    <GamesList games={news.soccer.premierleague.games} />
  </div>;

export default NewsList;
