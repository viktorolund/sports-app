import React from "react";
import PropTypes from "prop-types";

const CareerListRow = ({ myCareer }) => {
  return (
    <div>
      <div className="row">
        <div className="col-xs-2">
          <strong>
            {myCareer.time}
          </strong>
        </div>
        <div className="col-xs-10">
          <strong>
            {myCareer.description}
          </strong>
        </div>
      </div>
    </div>
  );
};

CareerListRow.propTypes = {
  myCareer: PropTypes.object.isRequired
};

export default CareerListRow;
