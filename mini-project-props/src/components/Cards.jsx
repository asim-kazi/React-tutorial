import React from 'react';
import { Plus } from 'lucide-react';

const Cards = (props) => {
  //   console.log(props.cakeName);

  return (
    <div className="card">
      <div className="top">
        <h2>{props.cakeName}</h2>
        <h3>{props.weight}</h3>
      </div>

      <div className="center">
        <img src={props.image} alt="cake" />
      </div>

      <div className="bottom">
        <button className="flex items-center gap-2">
          Add To Cart <Plus size={15} />
        </button>
        <h3>{props.price} ₹</h3>
      </div>
    </div>
  );
};

export default Cards;
