import React from 'react';
import logo from "../assets/logo.png"
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-10 backdrop-blur-md p-4 shadow-md ">
      <div className="container mx-auto flex items-center justify-between">
      
        <div className="text-white text-2xl font-bold">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy"/>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-black hover:text-gray-600">Dashboard</a>
          </li>
          <li>
            <a href="/" className="text-black hover:text-gray-600">My Patients</a>
          </li>
          <li>
            <a href="/newcase" className="text-black hover:text-gray-600">New Cases</a>
          </li>
          <li>
            <a href="/" className="text-black hover:text-gray-600">Profile</a>
          </li>
          
        </ul>
        
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            <a href="/login">Login</a>
          </button>
          <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
            <a href="/signup">Signup</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
