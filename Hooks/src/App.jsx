import React from 'react';
import { useState } from 'react';
import Basics from './components/Basics';
import CounterApp from './components/CounterApp';
import AdvanceState from './components/AdvanceState';
import FormHandling from './components/FormHandling';

const App = () => {
  return (
    <div>
      <Basics />
      <CounterApp />
      <AdvanceState />
      <FormHandling />
    </div>
  );
};

export default App;
