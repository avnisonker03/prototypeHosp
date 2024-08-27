import React from 'react';
import { useNavigate } from 'react-router-dom';

const patients = [
  { id: 1, name: 'Michael Brown', patientNo: 'P1234', regNo: 'R5678', image: 'https://cdn-icons-png.flaticon.com/512/5217/5217806.png' },
  { id: 2, name: 'Emily Davis', patientNo: 'P2234', regNo: 'R6678', image: 'https://cdn-icons-png.freepik.com/512/9262/9262842.png' },
  { id: 3, name: 'Neymar Jr.', patientNo: 'P3234', regNo: 'R7678', image: 'https://cdn-icons-png.flaticon.com/512/5217/5217806.png' },
  { id: 4, name: 'Blake Lively', patientNo: 'P4234', regNo: 'R8678', image: 'https://cdn-icons-png.freepik.com/512/9262/9262842.png' },
  { id: 5, name: 'Chris Evans', patientNo: 'P5234', regNo: 'R9678', image: 'https://cdn-icons-png.flaticon.com/512/5217/5217806.png' },
  { id: 6, name: 'Sarah Williams', patientNo: 'P6234', regNo: 'R10678', image: 'https://cdn-icons-png.freepik.com/512/9262/9262842.png' },
];

const NewCase = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-center mb-8">New Cases</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {patients.map(patient => (
          <div
            key={patient.id}
            className="bg-white bg-opacity-20 shadow-lg rounded-lg p-5 hover:shadow-2xl transition duration-300 cursor-pointer backdrop-blur-lg"
            onClick={() => navigate(`/newcase/${patient.id}`)}
          >
            <img src={patient.image} alt={patient.name} className="rounded-full w-24 h-24 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-center">{patient.name}</h2>
            <p className="text-center text-gray-600">Patient No: {patient.patientNo}</p>
            <p className="text-center text-gray-600">Reg No: {patient.regNo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCase;
