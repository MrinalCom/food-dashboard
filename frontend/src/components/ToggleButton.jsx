import React, { useState } from 'react';

function ToggleButton({ dishId, isPublished: initialIsPublished }) {
  const [isPublished, setIsPublished] = useState(initialIsPublished);

  const body = { dishId, isPublished };

  const changeIsPublished = async (e) => {
    e.preventDefault();
    setIsPublished(!isPublished);
    
    const response = await fetch("http://localhost:8081/api/updateIsPublished", {
      method: 'PUT',
      body: JSON.stringify({ ...body, isPublished: !isPublished }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log(response);
  };

  return (
    <div>
      <button
        onClick={changeIsPublished}
        className={`transition duration-300 ease-in-out transform border rounded-lg p-2 w-[7rem] text-white ${
          isPublished
            ? 'bg-green-500 hover:bg-green-600 active:scale-95'
            : 'bg-red-500 hover:bg-red-600 active:scale-95'
        }`}
      >
        {isPublished ? 'Published' : 'Not Published'}
      </button>
    </div>
  );
}

export default ToggleButton;
