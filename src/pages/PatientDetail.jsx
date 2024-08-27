import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const patients = [
    { id: 1, name: 'Michael Brown', patientNo: 'P1234', regNo: 'R5678', date: '14/2/2002', age:'12', gender:'Male', roomNo:'24',Bloodtype:'O+', image: 'https://cdn-icons-png.flaticon.com/512/5217/5217806.png' },
    { id: 2, name: 'Emily Davis', patientNo: 'P2234', regNo: 'R6678', date: '13/5/2003', age:'34', gender:'Female', roomNo:'33',Bloodtype:'O-', image: 'https://cdn-icons-png.freepik.com/512/9262/9262842.png' },
    { id: 3, name: 'jaden Smith', patientNo: 'P3234', regNo: 'R7678', date: '15/2/2004', age:'16', gender:'Male', roomNo:'266',Bloodtype:'A+', image: 'https://cdn-icons-png.flaticon.com/512/5217/5217806.png' },
    { id: 4, name: 'Anna Brown', patientNo: 'P4234', regNo: 'R8678', date: '17/4/1971', age:'17', gender:'Female', roomNo:'243',Bloodtype:'B+', image: 'https://cdn-icons-png.freepik.com/512/9262/9262842.png' },
    { id: 5, name: 'Chris Evans', patientNo: 'P5234', regNo: 'R9678', date: '18/5/2006', age:'54', gender:'Male', roomNo:'355',Bloodtype:'O+', image: 'https://cdn-icons-png.flaticon.com/512/5217/5217806.png' },
    { id: 6, name: 'Sarah Williams', patientNo: 'P6234', regNo: 'R10678', date: '14/2/2002', age:'19', gender:'Female', roomNo:'223',Bloodtype:'O-', image: 'https://cdn-icons-png.freepik.com/512/9262/9262842.png' },
];

const options = [
  'Initial Assessment',
  'Diagnosis',
  'Treatment Given',
  'Procedure Performed',
  'Follow-up Instructions',
];

const PatientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const patient = patients.find(p => p.id === parseInt(id));

  const handleSubmit = () => {
    
    const savedData = {
      patientId: patient.id,
      option: selectedOption,
      details: inputValue,
    };

    console.log('Saved Data:', savedData);
    alert('Details have been saved successfully!');

   
    setSelectedOption(null);
    setInputValue('');
  };

  return (
    <div className="container mx-auto py-8">
      <button onClick={() => navigate(-1)} className="text-blue-500 hover:underline">Back</button>

      <h1 className="text-4xl font-bold mb-4 text-white opacity-60">{patient.name}</h1>
      <img src={patient.image} alt={patient.name} className="rounded-full w-20 h-20 mb-4 mt-4" />
      <div className="flex justify-between max-w-[350px] mb-4 mt-2">
        <div className="left-details space-y-4">
          <p className='text-xl text-gray-600'>Patient No: {patient.patientNo}</p>
          <p className='text-xl text-gray-600'>Reg No: {patient.regNo}</p>
          <p className='text-xl text-gray-600'> Date: {patient.date}</p>
          <p className='text-xl text-gray-600'>Age: {patient.age}</p>
        </div>
        <div className="right-details space-y-4">
          <p className='text-xl text-gray-600'>Gender: {patient.gender}</p>
          <p className='text-xl text-gray-600'>Room No.: {patient.roomNo}</p>
          <p className='text-xl text-gray-600'>Blood: {patient.blood}</p>
        </div>
      </div>
      
      

      <h2 className="text-3xl font-bold mb-4">Select an Option:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {options.map(option => (
          <button
            key={option}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {selectedOption && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">{selectedOption}</h3>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder={`Enter details for ${selectedOption}`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></textarea>

          <button
            className="bg-green-500 text-white py-2 px-6 mt-4 rounded-lg hover:bg-green-600 transition duration-300"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default PatientDetail;
