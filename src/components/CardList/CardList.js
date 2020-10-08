import React from 'react';
import Card from '../Card/Card';

import './CardList.scss';

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export { CardList as default };
