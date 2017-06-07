import React from 'react';
import PropTypes from 'prop-types';

const SportListRow = ({sport}) => {
  return (
    <div>
        <div className="row">
            <div className="col-xs-2">
                <strong>{sport.time}</strong>
            </div>
            <div className="col-xs-10">
                <strong>{sport.description}</strong>
            </div>
        </div>
    </div>
  );
};

SportListRow.propTypes = {
    sport: PropTypes.object.isRequired
};

export default SportListRow;
