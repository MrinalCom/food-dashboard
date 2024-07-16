import React, { useState, useEffect } from 'react';
import ToggleButton from './ToggleButton';

function Dashboard() {
  const [dishes, setDishes] = useState([]);

  // handler for fetching data from database
  const getHandler = async () => {
    const response = await fetch("http://localhost:8081/api/getdishes", {
      method: 'GET',
    });

    const data = await response.json();
    setDishes(data.dishes);
  }

  useEffect(() => {
    getHandler();
  }, []);

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white'>
      <header className="py-6 bg-gray-800 shadow-md">
        <h1 className="text-4xl text-center font-bold text-green-400">Dashboard</h1>
      </header>

      <main className='flex-grow container mx-auto px-4 py-6'>
        <div className='overflow-x-auto'>
          <table className="min-w-full text-center border-collapse">
            <thead>
              <tr className='bg-gray-800'>
                <th className='py-3 px-4 text-lg'>Dish Id</th>
                <th className='py-3 px-4 text-lg'>Dish Name</th>
                <th className='py-3 px-4 text-lg'>Dish Image</th>
                <th className='py-3 px-4 text-lg'>Is Published</th>
              </tr>
            </thead>
            <tbody>
              {
                dishes.map((dish) => (
                  <tr key={dish.dishId} className='border-b border-gray-700'>
                    <td className='py-4 px-6'>{dish.dishId}</td>
                    <td className='py-4 px-6'>{dish.dishName}</td>
                    <td className='py-4 px-6'>
                      <img src={dish.imageUrl} alt={dish.dishName} className="w-20 h-20 object-cover mx-auto rounded-lg shadow-md" />
                    </td>
                    <td className='py-4 px-6'>
                      <ToggleButton dishId={dish.dishId} isPublished={dish.isPublished} />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </main>


    </div>
  )
}

export default Dashboard;
