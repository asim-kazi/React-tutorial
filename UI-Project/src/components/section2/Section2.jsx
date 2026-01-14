import React from 'react';
import Hero2Text from './Hero2Text';
import Containers from './Containers';

const Section2 = (props) => {
  return (
    <div className="h-screen w-full ">
      <Hero2Text />
      <Containers FoodItems={props.FoodItems} />
    </div>
  );
};

export default Section2;
