import React from 'react';
import image from "../assets/19366.jpg";
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-8 py-5">
     
      <div className="flex justify-between">
        <div
          className="bg-gray-100 py-20 rounded shadow-md w-1/2 mr-4"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-3xl font-bold mb-4 ml-[50px] text-black">
            Total Patients : <span className="font-semibold">10</span>
          </h2>
          <button className="px-4 ml-14 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
          Click to see all Patients
          </button>
        </div>

        <div
          className="bg-gray-100 py-20 rounded shadow-md w-1/2 ml-4"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h2 className="text-3xl font-bold mb-4 ml-[50px] text-black">
            New Cases : <span className="font-semibold">6</span>
          </h2>
          
          <button className="px-6 ml-14 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500"
          onClick={() => navigate('/newcase')}
          >
          Click to attend
          </button>
        </div>
      </div>

     
      <Hero />
    </div>
  );
};

export default Home;
