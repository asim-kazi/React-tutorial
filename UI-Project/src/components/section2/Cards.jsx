import React from 'react';
import { BadgePlus, StarHalf } from 'lucide-react';

const Cards = (props) => {

  return (
    <div className="h-120 shrink-0 bg-white/30 backdrop-blur-md border border-black/30 shadow-lg p-6 max-w-sm  w-80 rounded-4xl justify-between bg-gradient-to-b from-white/20 to-amber-100/80">
      <img className="scale-90" src={props.img} alt={props.name} />
      <h4 className="text-yellow-300 mx-5 p-1.5 flex mb-2">
        <StarHalf />
        {props.rating}
      </h4>
      <h2 className="text-2xl font-bold mx-6 p-1.2">{props.name}</h2>
      <h4 className="font-medium mx-5 p-1.5">{props.des}</h4>
      <div className="flex justify-between mx-7 mt-2">
        <h4>{props.price}$</h4>
        <button>
          <BadgePlus />
        </button>
      </div>
    </div>
  );
};

export default Cards;
