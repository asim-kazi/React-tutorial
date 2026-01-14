import React from 'react';
import Section1 from './components/section1/Section1';
import Section2 from './components/section2/Section2';

const App = () => {
  const FoodItems = [
    {
      img: 'https://i.pinimg.com/736x/e6/9f/6b/e69f6b336bbc65989624b94495c9d06f.jpg',
      rating: '8.3',
      name: 'Rasmalai',
      des: 'A Bengoli Famous Sweet',
      price: '12',
    },
    {
      img: 'https://i.pinimg.com/1200x/58/8f/21/588f2157824c7ca99e03e44ef2453238.jpg',
      rating: '9.0',
      name: 'Leg Pis',
      des: 'Deliciuos Chicken Leg Pis for Non-Vegitarian..',
      price: '15',
    },
    {
      img: 'https://i.pinimg.com/736x/00/15/08/00150843f34df047b3b70755d5e401c7.jpg',
      rating: '7.3',
      name: 'Roll',
      des: 'Heathy veg roll for Gym person',
      price: '12',
    },
  ];
  return (
    <div className="relative min-h-screen w-full">
      <Section1 />
      <Section2 FoodItems={FoodItems} />
    </div>
  );
};

export default App;
