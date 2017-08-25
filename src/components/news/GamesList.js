import React from "react";
import PropTypes from "prop-types";

import GamesRow from "./GamesRow";

const GamesList = ({ games }) =>
  <div>
    {games.map(game => <GamesRow key={game.id} game={game} />)}
  </div>;

GamesList.PropTypes = {
  games: PropTypes.array.isRequired
};

export default GamesList;
