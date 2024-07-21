// src/AddressCard.js

import React, { useState } from 'react';

function AddressCard({ address, deleteAddress, editAddress }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(address);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    editAddress(formData);
    setIsEditing(false);
  };
  

  return (
    <div className=" rounded shadow-md">
      {isEditing ? (
        <div className='bg-rose-200 p-4 '>
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(formData).map((key) => (
              <div key={key} className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                />
              </div>
            ))}
          </div>
          <button 
            onClick={handleSave}
            className="mt-4 bg-rose-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      ) : (
        <div className='bg-white p-4 '>
          <ul>
            {Object.entries(address).map(([key, value]) => (
              <li key={key} className="mb-1">
                <strong>{key.replace(/([A-Z])/g, ' $1').trim()}: </strong>{value}
              </li>
            ))}
          </ul>
          <div className="flex space-x-2 mt-4">
            <button 
              onClick={() => setIsEditing(true)}
              className="bg-rose-600 text-white px-4 py-2 rounded">
              Edit
            </button>
            <button 
              onClick={deleteAddress}
              className="bg-rose-600 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddressCard;
