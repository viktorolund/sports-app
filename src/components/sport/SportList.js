import React from 'react';
import SportListRow from './SportListRow';

const SportList = ({sports}) => {
  return (
    <div>
        {
            sports.map(sport =>
                <SportListRow key={sport.id} sport={sport} />
            )
        }
    </div>
  );
};

export default SportList;
