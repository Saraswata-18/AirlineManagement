import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';

const CompanyProfile = () => {

  //response se data lega to inn sab variables ko useState kar dena
  const name ='Saraswata';
  const number ='9073192820';
  const birthday ='';
  const gender ='Male';
  const adress ='';
  const pincode ='700129';
  const state ='West Bengal';

  const travelHistoryData = [
    {
      date: '2024-06-01',
      arrival: '10:00 AM',
      departure: '2:30 PM',
      duration: '4h 30m',
      from: 'New York (JFK)',
      to: 'Los Angeles (LAX)',
      transactionId: 'ABC123',
      orderId: 'XYZ456',
    },
    {
      date: '2024-06-10',
      arrival: '8:45 AM',
      departure: '12:15 PM',
      duration: '3h 30m',
      from: 'Chicago (ORD)',
      to: 'Miami (MIA)',
      transactionId: 'DEF789',
      orderId: 'PQR987',
    },
    // Add more travel history entries as needed
  ];
  
  const [showModal, setShowModal] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const [selectedData, setSelectedData] = useState(null); 
  const handleBlockClick = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  return (
    <div className='flex flex-col'>
    <div><Navbar/></div>
    <div className="bg-gradient-to-b from-orange-500 to-yellow-500 min-h-screen p-8 mt-12">

            <div className='flex mb-6 flex-row'><h1 className='text-4xl font-semibold'>Profile</h1></div>
            <div className='w-full flex px-6 items-center flex-row h-14 bg-white bg-opacity-50 hover:bg-gradient-to-r from-white to-gray-200 border-b-2 border-gray-200'><h1 className='w-20 text-gray-600' >Name</h1><h1 className='ml-20 font-semibold'>{!name ? 'To be Added': name}</h1></div>
            <div className='w-full flex px-6 items-center flex-row h-14 bg-white bg-opacity-50 hover:bg-gradient-to-r from-white to-gray-200 border-b-2 border-gray-200'><h1 className='w-20 text-gray-600' >Phone no.</h1><h1 className='ml-20 font-semibold'>{!number ? 'To be Added' : number}</h1></div>
            <div className='w-full flex px-6 items-center flex-row h-14 bg-white bg-opacity-50 hover:bg-gradient-to-r from-white to-gray-200 border-b-2 border-gray-200'><h1 className='w-20 text-gray-600'>Birthday</h1><h1 className='ml-20 font-semibold'>{!birthday ? 'To be Added' : birthday}</h1></div>
            <div className='w-full flex px-6 items-center flex-row h-14 bg-white bg-opacity-50 hover:bg-gradient-to-r from-white to-gray-200 border-b-2 border-gray-200'><h1 className='w-20 text-gray-600'>Gender</h1><h1 className='ml-20 font-semibold'>{!gender ? 'To be Added' : gender}</h1></div>
            <div className='w-full flex px-6 items-center flex-row h-14 bg-white bg-opacity-50 hover:bg-gradient-to-r from-white to-gray-200 border-b-2 border-gray-200'><h1 className='w-20 text-gray-600'>Address</h1><h1 className='ml-20 font-semibold'>{!adress ? 'To be Added' : adress}</h1></div>
            <div className='w-full flex px-6 items-center flex-row h-14 bg-white bg-opacity-50 hover:bg-gradient-to-r from-white to-gray-200 border-b-2 border-gray-200'><h1 className='w-20 text-gray-600'>Pin Code</h1><h1 className='ml-20 font-semibold'>{!pincode ? 'To be Added' : pincode}</h1></div>
            <div className='w-full flex px-6 items-center flex-row h-14 bg-white bg-opacity-50 hover:bg-gradient-to-r from-white to-gray-200 border-b-2 border-gray-200'><h1 className='w-20 text-gray-600'>State</h1><h1 className='ml-20 font-semibold'>{!state ? 'To be Added' : state}</h1></div>

        {/* <h2 className="text-2xl font-semibold text-orange-500 mb-4">Travel History</h2> */}
        <div className='flex mb-6 mt-6 flex-row'><h1 className='text-4xl font-semibold'>Travel History</h1></div>
      {travelHistoryData.map((data, index) => (
        <div
          key={index}
          className="bg-white bg-opacity-50 rounded-lg shadow-md p-4 mb-4 cursor-pointer hover:bg-gray-100 flex items-center justify-between"
          onClick={() => handleBlockClick(data)}
        >
          <div>
            <p className="text-gray-600">{data.date}</p>
            <p className="text-indigo-600 font-semibold">
              {data.from} to {data.to}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Arrival: {data.arrival}</p>
            <p className="text-gray-500">Departure: {data.departure}</p>
            <p className="text-gray-500">Duration: {data.duration}</p>
          </div>
          
        </div>
      ))}

      {/* Pop-up/modal */}
      
      {/* Pop-up/modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur">
          {/* Modal content */}
          <div className="bg-white rounded-lg p-6 w-80">
            {/* <Modal.Header closeButton>
              
            </Modal.Header>
            <Modal.Body> */}
            <div className='font-bold'>Transaction Details</div>
              Transaction ID: {selectedData?.transactionId}
              <br />
              Order ID: {selectedData?.orderId}
            {/* </Modal.Body>
            <Modal.Footer>
           
            </Modal.Footer> */}
             <div
                // variant="secondary"
                onClick={() => setShowModal(false)}
                className="text-red-500 cursor-pointer"
            >
                Close
            </div>
          </div>
        </div>
      )}
      {showEmail && (
        <div className="fixed inset-0 backdrop-blur overflow-y-auto h-full w-full" id="my-modal">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <div className="mt-2 px-7 py-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border rounded-md text-sm shadow-sm placeholder-slate-400
                           focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200
                           disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600
                           focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
            <div className="items-center px-4 py-3">
              <button onClick={() => setShowEmail(false)}
                className="px-4 py-2 bg-sky-500 text-white text-base font-medium rounded-md w-full
                           shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </div></div>
  );
};

export default CompanyProfile;
