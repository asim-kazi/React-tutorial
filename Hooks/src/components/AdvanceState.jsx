import React from 'react';
import { useState } from 'react';

const AdvanceState = () => {
  const [user, setUser] = useState({ name: 'Asim', age: 21 });

  const btnClicked = () => {
    // const newValue = {...user};
    // newValue.name = "Mehfooz"
    // newValue.age = 20
    // setUser(newValue)

    // Instead this above we use now Shorter Version

    // Shorter Version
    setUser((prev) => ({ ...prev, name: 'Mehfooz' }));
    setUser((prev) => ({ ...prev, age: 20 }));
  };

  // We Can also play with array also
  const [arr, setArr] = useState([10, 20, 30]);

  const addEle = () => {
    const newEle = [...arr];
    newEle.push(99);
    setArr(newEle);
  };

  // Now we See the Batch Update in React
  const [num, setNum] = useState(10);

  const batchUpdate = () => {
    // It is wrong way to do batch increment

    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);

    // It is Correct way to update by batch
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <div className="h-screen w-screen bg-green-300">
      <h1 className="text-4xl font-black p-8 h-10">
        Name : {user.name} And Age : {user.age}
      </h1>
      <button className="m-10 p-2 bg-gray-500 rounded-2xl" onClick={btnClicked}>
        Change Value
      </button>

      <h1 className="text-4xl font-black p-8 h-10">
        Array Elements are : {arr}
      </h1>
      <button className="m-10 p-2 bg-gray-500 rounded-2xl" onClick={addEle}>
        Add Value
      </button>

      <h1 className="text-4xl font-black p-8 h-10">
        Batch Update : num : {num}
      </h1>
      <button
        className="m-10 p-2 bg-gray-500 rounded-2xl"
        onClick={batchUpdate}
      >
        Direct by 3
      </button>
    </div>
  );
};

export default AdvanceState;
