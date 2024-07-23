// src/Profile.js
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDelete } from "react-icons/ai";

const MyProfilePage = () => {
  const [picture, setPicture] = useState(
    "https://ideogram.ai/assets/progressive-image/balanced/response/0VQSifToSfCe9btjHyEzUw"
  );
  const [name, setName] = useState("Sneha Maurya");
  const [gender, setGender] = useState("Female");
  const [email, setEmail] = useState("SnehaXYZ@gmail.com");
  const [contact, setContact] = useState("9557383222");
  const [editMode, setEditMode] = useState(false);

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeletePicture = () => {
    setPicture(null);
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  // const handlePictureUrlChange = () => {
  //   setPicture(pictureUrl);
  // };

  return (
    <div className="relative md:ml-10 max-w-screen-2xl  bg-white shadow-md rounded-md md:p-10 md:mt-6 m-3 pl-4">
      <h2 className="font-semibold md:absolute md:top-6 md:text-xl text-base">
        Profile Picture
      </h2>
      <div className="flex flex-col ">
        <img
          className="md:w-24 md:h-24 w-20 h-20 rounded-full object-cover  mt-3 mb-3 "
          src={picture}
          alt=""
        />
        <div className="  ">
          <button
            className="md:mr-10 bg-rose-200 text-black py-1 md:px-8 px-3 rounded-md mr-3"
            onClick={() => document.getElementById("pictureInput").click()}
          >
            <div className="sm:hidden ">
            <FaRegEdit /> 
            </div>
            <div className="hidden sm:block">Change Picture</div>
          </button>
          <button
            className="bg-rose-200 text-black py-1 md:px-8 px-3 rounded-md"
            onClick={handleDeletePicture}
          >
            <div className="sm:hidden ">
            <AiOutlineDelete />
            </div>
            <div className="hidden sm:block">Delete Picture</div>
            
            
          </button>
          <input
            id="pictureInput"
            type="file"
            className="hidden "
            onChange={handlePictureChange}
          />
        </div>
      </div>
      <div className="mt-8 ">
        <p className="mb-3">
          <strong>Name:</strong> {name}
        </p>
        <p className="mb-3">
          <strong>Gender:</strong> {gender}
        </p>
        <p className="mb-3">
          <strong>Email:</strong> {email}
        </p>
        <p className="mb-3">
          <strong>Contact:</strong> {contact}
        </p>
      </div>
      <button
        className="flex items-center bg-gray-200 text-black md:py-2 md:px-4 px-2 py-1 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 absolute right-4 top-4"
        onClick={handleEditToggle}
      >
        <FaRegEdit className="md:h-5 md:w-5 md:mr-2 h-3 w-3 mr-1" />
        Edit
      </button>

      {editMode && (
        <div className="mt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEditMode(false);
            }}
          >
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Gender</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  className="mr-2"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="male" className="mr-4">
                  Male
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  className="mr-2"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Contact</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-rose-500 text-white py-1 px-3 rounded"
            >
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyProfilePage;
