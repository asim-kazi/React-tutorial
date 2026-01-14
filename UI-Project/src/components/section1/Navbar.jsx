import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-10">
      <h4 className=" font-bold uppercase p-2 px-6 py-2">FoodEat</h4>
      <div className=" px-6 py-2 uppercase tracking-widest justify-between text-sm flex">
        <h4 className="  ml-8 p-2">Home</h4>
        <h4 className="  ml-8 p-2">Menu</h4>
        <h4 className="  ml-8 p-2">About</h4>
        <h4 className="  ml-8 p-2">Profile</h4>
      </div>
    </div>
  );
};

export default Navbar;
