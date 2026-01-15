import React from 'react';
import { useState } from 'react';

const Basics = () => {
  // It is by using vanila js...
  // let a = 20;

  // function changeValue() {
  //   console.log(a);
  //   a++;
  //   console.log(a);
  // }

  // Now by using React
  // Import useState, then use useStateSinppet to use...
  const [num, setNum] = useState(10);
  // const [name, setName] = useState('Asim');
  // const [arr, setArr] = useState([10, 20, 30]);

  // Write function to change value
  function changeValue() {
    setNum(20);
  }
  return (
    <div className="h-screen w-screen bg-yellow-300">
      <h1 className="text-4xl font-black p-8 h-10">Value of A is : {num}</h1>
      <button
        className="m-10 p-2 bg-gray-500 rounded-2xl"
        onClick={changeValue}
      >
        Click Here to Change Value
      </button>
    </div>
  );
};

export default Basics;
