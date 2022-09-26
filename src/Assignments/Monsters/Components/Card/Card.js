import React from 'react';
import './Card.scss';

function Card({ id, name, email }) {
  return (
    <div className='cardContainer'>
      <img
        alt='monsterImage'
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
