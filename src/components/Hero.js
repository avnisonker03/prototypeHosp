import React from 'react';
import patient from '../assets/patient.png';
import '../App.css'; 

const Hero = () => {
  const patients = [
    { id: 1, image: patient, name: 'Chris Hemsworth', dob: '01-01-1980', regNo: '001' },
    { id: 2, image: patient, name: 'Jaden Smith', dob: '02-02-1985', regNo: '002' },
    { id: 3, image: patient, name: 'Michael Jordan', dob: '03-03-1990', regNo: '003' },
    { id: 4, image: patient, name: 'Ryan Reynold', dob: '04-04-1995', regNo: '004' },
    { id: 5, image: patient, name: 'Chris evan', dob: '05-05-2000', regNo: '005' },
    { id: 6, image: patient, name: 'Steve jobs', dob: '06-06-2005', regNo: '006' },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center py-5">
     
      <h1 className="text-3xl font-bold mb-6 text-shadow text-white">Happy Cases</h1>

     
      <div className="flex justify-between w-full max-w-4xl ">
        <div className="w-1/2 flex flex-col space-y-4 mr-4">
          {patients.slice(0, 3).map(patient => (
            <div key={patient.id} className="bg-gray-100 px-6 py-1 rounded-2xl shadow-md flex items-center">
              <img src={patient.image} alt={patient.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{patient.name}</h3>
                <p className="text-gray-700">DOB: {patient.dob}</p>
                <p className="text-gray-700">Reg. No.: {patient.regNo}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-1/2 flex flex-col space-y-4 ml-4">
          {patients.slice(3).map(patient => (
            <div key={patient.id} className="bg-gray-100 px-6 py-1  rounded-2xl shadow-md flex items-center">
              <img src={patient.image} alt={patient.name} className="w-16 h-16 rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">{patient.name}</h3>
                <p className="text-gray-700">DOB: {patient.dob}</p>
                <p className="text-gray-700">Reg. No.: {patient.regNo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
