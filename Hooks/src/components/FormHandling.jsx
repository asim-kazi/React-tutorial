import React from 'react';
import { useState } from 'react';

const FormHandling = () => {
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log('Form is Submitted');
  // };

  //   return (
  //     <div className="h-screen w-screen bg-violet-500 p-15 ">
  //       <form
  //         onSubmit={(e) => {
  //           submitHandler(e);
  //         }}
  //       >
  //         <input
  //           className="bg-amber-100 p-6"
  //           type="text"
  //           placeholder="Enter Your Name"
  //         />
  //         <button className="bg-gray-700 p-4 rounded-3xl flex mt-10 px-10">
  //           Submit
  //         </button>
  //       </form>
  //     </div>
  //   );

  const [title, setTitle] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Form is Submitted by,', title);
    setTitle('');
  };

  return (
    <div className="h-screen w-screen bg-violet-500 p-15 ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          className="bg-amber-100 p-6"
          type="text"
          placeholder="Enter Your Name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button className="bg-gray-700 p-4 rounded-3xl flex mt-10 px-10">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormHandling;
