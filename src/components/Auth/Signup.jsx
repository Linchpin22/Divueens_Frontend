import React from "react";

const Signup = () => {

  return (
    <>
      <form action="#" className="w-1/2 [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)]">
        <div className="h-[50px] w-full mt-[20px]">
          <input className="h-full w-full outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]" type="text" placeholder="Email Address" required />
        </div>
        <div className="h-[50px] w-full mt-[20px]">
          <input className="h-full w-full outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]" type="password" placeholder="Password" required />
        </div>
        <div className="h-[50px] w-full mt-[20px]">
          <input className="h-full w-full outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]" type="password" placeholder="Confirm password" required />
        </div>
        <div className="h-[50px] w-full mt-[20px] rounded-[15px] relative overflow-hidden group">
          <div className="h-full w-[300%] absolute -left-full bg-gradient-to-l from-[#881337] to-[#fb7185] rounded-[15px] [transition:all_0.4s_ease] group-hover:left-[0]"></div>
          <input className="outline-none border-[1px] border-[lightgrey] border-b-2 [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185] h-full w-full relative bg-none border-[none] text-[#fff] pl-0 rounded-[15px] text-[20px] font-medium cursor-pointer" type="submit" value="Signup" />
        </div>
      </form>
    </>
  )
}

export default Signup;