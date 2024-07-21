import { useState, useEffect } from "react";
// import { FaRegEdit } from "react-icons/fa";
// import profileData from "./profilePageData";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";

function AddressPage() {
  // const [profileAddressData, setProfileAddressData] = useState(profileData);

  // const editProfileAddressData = (addressId) => {
  //   const updatedProfileData = profileAddressData.map((val) => {
  //     if (val.id === addressId) {
  //       return { ...val, isSelectedActive: true };
  //     }
  //     return val;
  //   });
  //   setProfileAddressData(updatedProfileData);
  // };

  // const saveProfileData = (addressId) => {
  //   const updatedProfileData = profileAddressData.map((val) => {
  //     if (val.id === addressId) {
  //       return { ...val, isSelectedActive: false };
  //     }
  //     return val;
  //   });
  //   setProfileAddressData(updatedProfileData);
  // };

  // const handleInputChange = (addressId, field, value) => {
  //   const updatedProfileData = profileAddressData.map((val) => {
  //     if (val.id === addressId) {
  //       return { ...val, [field]: value };
  //     }
  //     return val;
  //   });
  //   setProfileAddressData(updatedProfileData);
  // };
  // Add new Address
  // const [addresses, setAddresses] = useState(profileData);
  // const [isFormVisible, setIsFormVisible] = useState(false);
  // const [newAddress, setNewAddress] = useState({
  //   firstName: '',
  //   lastName: '',
  //   streetAddress: '',
  //   apartmentNumber: '',
  //   city: '',
  //   zipCode: '',
  //   state: '',
  //   country: '',
  //   phoneNumber: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setNewAddress({ ...newAddress, [name]: value });
  // };

  // const handleSave = () => {
  //   setAddresses([...addresses, newAddress]);
  //   setNewAddress({
  //     firstName: '',
  //     lastName: '',
  //     streetAddress: '',
  //     apartmentNumber: '',
  //     city: '',
  //     zipCode: '',
  //     state: '',
  //     country: '',
  //     phoneNumber: '',
  //   });
  //   setIsFormVisible(false);
  // };

  const [addresses, setAddresses] = useState(() => {
    const savedAddresses = localStorage.getItem("addresses");
    return savedAddresses ? JSON.parse(savedAddresses) : [];
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const addAddress = (address) => {
    setAddresses([...addresses, address]);
  };

  const deleteAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

  const editAddress = (index, updatedAddress) => {
    const updatedAddresses = addresses.map((address, i) =>
      i === index ? updatedAddress : address
    );
    setAddresses(updatedAddresses);
  };

  return (
    <div className=" relative ml-4 flex md:flex-row flex-col gap-3">
      <button
        onClick={() => setShowForm(!showForm)}
        className="absolute top-2 right-1 px-4 py-3 w-60 h-12 bg-rose-400 text-white rounded-3xl"
      >
        Add New Address
      </button>

      <div className="flex md:flex-row lg:pt-10 xl:pt-0 md:pt-24 pt-20 gap-8 flex-col justify-center">
        {showForm && (
          <AddressForm
            showForm={showForm}
            setShowForm={setShowForm}
            addAddress={addAddress}
          />
        )}

        <div className="flex gap-3 flex-col text-[18px]  items-center">
          {addresses.map((address, index) => (
            <AddressCard
              key={index}
              address={address}
              deleteAddress={() => deleteAddress(index)}
              editAddress={(updatedAddress) =>
                editAddress(index, updatedAddress)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AddressPage;
