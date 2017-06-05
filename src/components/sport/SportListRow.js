import React from 'react';
import PropTypes from 'prop-types';

const SportListRow = ({sport}) => {
  return (
    <div>
        <div className="row">
            <div className="col-xs-12">
                {sport.category}
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12">
                {sport.name}
            </div>
        </div>
    </div>
  );
};

SportListRow.propTypes = {
    sport: PropTypes.object.isRequired
};

export default SportListRow;
