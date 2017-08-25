import React from "react";
import PropTypes from "prop-types";
import CareerListRow from "./CareerListRow";

const CareerList = ({ career }) =>
  <div>
    {career.map(myCareer =>
      <CareerListRow key={myCareer.id} myCareer={myCareer} />
    )}
  </div>;

CareerList.propTypes = {
  career: PropTypes.array
};

export default CareerList;
