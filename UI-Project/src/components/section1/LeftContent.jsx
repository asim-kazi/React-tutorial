import React from 'react';
import HeroText from './HeroText';
import Buttons from './Buttons';

const LeftContent = () => {
  return (
    <div className=" h-full p-6 w-1/2 flex-col content-center">
      <HeroText />
      <Buttons />
    </div>
  );
};

export default LeftContent;
