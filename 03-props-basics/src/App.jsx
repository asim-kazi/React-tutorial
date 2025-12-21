import React from 'react';
import Cards from './components/Cards';

const App = () => {
  return (
    <div className="parent">
      <Cards
        user="Asim"
        age={21}
        img="https://images.unsplash.com/photo-1510913415497-e34c432bd039?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXxlbnwwfHwwfHx8MA%3D%3D"
      />

      
    </div>
  );
};

export default App;
