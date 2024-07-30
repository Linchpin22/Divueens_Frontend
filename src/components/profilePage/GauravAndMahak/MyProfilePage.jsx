import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { LuDoorOpen } from "react-icons/lu";

const MyProfilePage = () => {
  const [picture, setPicture] = useState(
    localStorage.getItem('picture') || "https://ideogram.ai/assets/progressive-image/balanced/response/0VQSifToSfCe9btjHyEzUw"
  );
  const [name, setName] = useState(localStorage.getItem('name') || "");
  const [email, setEmail] = useState(localStorage.getItem('email') || "");
  const [contact, setContact] = useState(localStorage.getItem('contact') || "");
  const [birthday, setBirthday] = useState(localStorage.getItem('birthday') || "");
  const [gender, setGender] = useState(localStorage.getItem('gender') || "");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    birthday: '',
    gender: '',
  });

  useEffect(() => {
    localStorage.setItem('picture', picture);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('contact', contact);
    localStorage.setItem('birthday', birthday);
    localStorage.setItem('gender', gender);

    if (name === "" && email === "") {
      setIsEditing(true);
    }
  }, [picture, name, email, contact, birthday, gender]);

  useEffect(() => {
    if (isEditing) {
      setProfile({
        name,
        email,
        phoneNumber: contact,
        birthday,
        gender
      });
    }
  }, [isEditing, name, email, contact, birthday, gender]);

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

  const handleSave = () => {
    setIsEditing(false);
    setName(profile.name);
    setEmail(profile.email);
    setContact(profile.phoneNumber);
    setBirthday(profile.birthday);
    setGender(profile.gender);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  return (
    <>
      {isEditing ? (
        <div className="w-full max-w-lg mx-auto shadow-2xl rounded-lg">
          <nav className="flex rounded-t-lg items-center justify-start p-4 bg-gray-300 shadow-md w-full">
            <button
              onClick={() => setIsEditing(false)}
              className="text-gray-700 hover:text-gray-900 transition duration-300"
            >
              <LuDoorOpen size={20}/>
            </button>
            <h1 className="ml-4 text-2xl font-bold text-gray-700">Edit Profile</h1>
          </nav>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                value={profile.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                name="phoneNumber"
                type="tel"
                value={profile.phoneNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthday">
                Select Your Birthday
              </label>
              <input
                name="birthday"
                type="date"
                value={profile.birthday}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
              <div className="flex items-center">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={profile.gender === 'Female'}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={profile.gender === 'Male'}
                    onChange={handleChange}
                    className="mr-1"
                  />
                  Male
                </label>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSave}
                className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition duration-300"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative md:ml-10 max-w-screen-2xl bg-white shadow-md rounded-md md:p-10 md:mt-6 m-3 pl-4">
          <h2 className="font-semibold md:absolute md:top-6 md:text-xl text-base">
            Profile Picture
          </h2>
          <div className="flex flex-col">
            <img
              className="md:w-24 md:h-24 w-20 h-20 rounded-full object-cover mt-3 mb-3"
              src={picture}
              alt=""
            />
            <div>
              <button
                className="md:mr-10 bg-rose-200 text-black py-1 md:px-8 px-3 rounded-md mr-3"
                onClick={() => document.getElementById("pictureInput").click()}
              >
                <div className="sm:hidden">
                  <FaRegEdit />
                </div>
                <div className="hidden sm:block">Change Picture</div>
              </button>
              <button
                className="bg-rose-200 text-black py-1 md:px-8 px-3 rounded-md"
                onClick={handleDeletePicture}
              >
                <div className="sm:hidden">
                  <AiOutlineDelete />
                </div>
                <div className="hidden sm:block">Delete Picture</div>
              </button>
              <input
                id="pictureInput"
                type="file"
                className="hidden"
                onChange={handlePictureChange}
              />
            </div>
          </div>
          <div className="mt-8">
            <p className="mb-3">
              <strong>Full Name:</strong> {name}
            </p>
            <p className="mb-3">
              <strong>E-mail:</strong> {email}
            </p>
            <p className="mb-3">
              <strong>Phone Number:</strong> {contact}
            </p>
            <p className="mb-3">
              <strong>Select Your Birthday:</strong> {birthday}
            </p>
            <p className="mb-3">
              <strong>Gender:</strong> {gender}
            </p>
          </div>

          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center bg-gray-200 text-black md:py-2 md:px-4 px-2 py-1 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 absolute right-4 top-4"
          >
            Edit <span className="ml-2">✏️</span>
          </button>
        </div>
      )}
    </>
  );
};

export default MyProfilePage;
