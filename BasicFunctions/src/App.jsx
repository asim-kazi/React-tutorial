import React from 'react';

const App = () => {
  function clickable() {
    console.log('Clickable');
  }

  return (
    <div>
      <div className="h-150 w-200 m-10 bg-gray-500">
        <h4 className="text-3xl font-bold px-10">
          Buttons with function Created outside
        </h4>

        <button
          className="px-5 p-2 m-10 rounded-full bg-blue-700"
          onClick={clickable} // Function is called when we click one time
          // onDoubleClick={clickable}        // Function is called when we click two times
          // onMouseEnter={clickable}         // Function is called when we hover mouse pointer on button
        >
          Click Here To see From outside function
        </button>

        <h4 className="text-3xl font-bold px-10">
          Buttons with inline function
        </h4>
        <button
          className="px-5 p-2 m-10 rounded-full bg-blue-700"
          onClick={function () {
            console.log('Function is written in button element');
          }}
        >
          Click Here To see from inside funntion
        </button>

        <h4 className="text-3xl font-bold px-10"> Input Changes Track</h4>
        <input
          className="p-5 mx-10 mt-8 bg-amber-50"
          type="text"
          placeholder="Enter Your Name"
          onChange={function (elem) {
            console.log(elem.target.value);
          }}
        />

        <h4 className="text-3xl font-bold px-10">
          Function use on block of square
        </h4>
        <h1
          className="bg-amber-700 m-4 h-20 w-30 mx-10"
          onMouseMove={(elem) => {
            console.log('Client X :', elem.clientX);
            console.log('Client Y :', elem.clientY);
          }}
        ></h1>
      </div>
      <div
        className="bg-fuchsia-700 h-200 w-screen"
        onWheel={(elem) => {
          console.log(elem.deltaY);
        }}
      >
        <h4 className="text-3xl font-bold px-10 mx-10 p-5 w-200 ">
          This Div is Created for check scroll functions
        </h4>
      </div>
    </div>
  );
};

export default App;
