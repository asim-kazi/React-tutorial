import React from 'react';
import Cards from './components/cards';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      {/* <div className="card">
        <h1>Asim Kazi</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, est!</p>
      </div> */}

      {/* 2nd component */}

      <Navbar />

      {/* 1st component  */}

      {/* {Cards()} */}
      <Cards />

      
      

    </div>
  );
};

export default App;
