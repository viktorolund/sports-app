import React from "react";
import PropTypes from "prop-types";

const GamesRow = ({ game }) =>
  <div>
    <div className="row">
      <div className="col-xs-4">
        <strong>
          {game.match}
        </strong>
      </div>
      <div className="col-xs-4">
        <strong>
          Score: {game.score}
        </strong>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <strong>Goalscorers</strong>
      </div>
    </div>
    {game.goalscorers.map(goalscorer =>
      <div className="row" key={goalscorer.playerId}>
        <div className="col-xs-12">
          <strong>{goalscorer.player}</strong>{" "}
          <span>
            <strong>
              In minute: {goalscorer.minute}
            </strong>
          </span>
        </div>
      </div>
    )}
  </div>;

GamesRow.PropTypes = {
  game: PropTypes.object.isRequired
};

export default GamesRow;
