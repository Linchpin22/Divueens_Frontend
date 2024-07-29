import React from "react";
import { Navigate , NavLink } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

function LogOut() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/");
  };
  return (
    <div>
      <div onClick={handleLogout} className="flex justify-center items-center">
        <NavLink to="/" className="flex justify-center items-center gap-3 py-3 px-5 text-rose-600 bg-transparent border-[2px] border-rose-600 rounded-lg hover:bg-rose-600 hover:text-white">
          <button >
            Log Out !
          </button>
          <AiOutlineLogout size={25}/>
        </NavLink>
        
      </div>
    </div>
  );
}

export default LogOut;
