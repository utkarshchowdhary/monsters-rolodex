import React from 'react';

import './Card.scss';

const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
      />
      <h2>{monster.name}</h2>
      <p>{monster.gender}</p>
    </div>
  );
};

export { Card as default };
