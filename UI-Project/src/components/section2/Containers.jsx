import React from 'react';
import Cards from './Cards';

const Containers = (props) => {
  return (
    <div className=" h-full w-full p-20 flex flex-nowrap gap-10 px-50">
      {props.FoodItems.map(function (elem, idx) {
        return (
          <Cards
            key={idx}
            img={elem.img}
            rating={elem.rating}
            name={elem.name}
            des={elem.des}
            price={elem.price}
          />
        );
      })}
    </div>
  );
};

export default Containers;
