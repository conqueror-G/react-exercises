import React from 'react';
// import Monsters from "../../Monsters";
import Card from '../Card/Card';
import './CardList.scss';

function CardList({ monsters, loading }) {
  if (loading) return <div>loading</div>;

  console.log(monsters);

  return (
    <div className='cardList'>
      {monsters.map(cards => (
        <Card
          key={cards.id}
          id={cards.id}
          name={cards.name}
          email={cards.email}
        />
      ))}
    </div>
  );
}

export default CardList;
