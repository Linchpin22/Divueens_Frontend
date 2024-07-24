import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {

  const [generateOTP, setGenerateOTP] = useState(false);
  const [otpText, setOtpText] = useState(false);
  const [otpV, setOtpV] = useState('');
  const [count, setCount] = useState(60);
  const [resendOTP, setResendOTP] = useState(false);

  useEffect(() => {
    let timer;
    if (generateOTP) {
      timer = setInterval(() => {
        setCount(count - 1);
        if (count === 0) {
          clearInterval(timer);
          setResendOTP(true);
        }
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [generateOTP, count]);

  const otpGenerate = () => {
    setGenerateOTP(true);
    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log(otp);
    setTimeout(() => {
      setOtpV(otp.toString());
    }, 5000)
    setOtpText(true);
    setCount(60);
    setResendOTP(false);
  };

  return (
    <>
      <form
        action="#"
        className="w-1/2 [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)]">
        <div
          className="h-[50px] w-full mt-[20px]">
          <input
            className="h-full w-full outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]"
            type="text"
            placeholder="Full Name"
            required />
        </div>
        <div
          className="h-[50px] w-full mt-[20px]">
          <input
            className="h-full w-full outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]"
            inputMode="numeric"
            placeholder="Phone Number"
            required />
        </div>
        <div
          className="h-[50px] w-full mt-[20px]">
          <input
            className="h-full w-full outline-none pl-[15px] rounded-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]"
            type="password"
            placeholder="Password"
            required />
        </div>
        <div
          className="h-[50px] w-full mt-[20px] flex items-center">
          <input
            className="h-full w-[15.5rem] outline-none pl-[15px] rounded-l-[15px] border-[1px] border-[solid] border-[lightgrey] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]"
            inputMode="numeric"
            // because of value you can't type anything
            // remove it when the otp is send via message
            value={otpV}
            placeholder="OTP"
            required />
          <button onClick={otpGenerate} className="bg-gradient-to-l from-[#881337] to-[#fb7185] rounded-r-[15px] text-xs px-2 py-4 text-white">Send OTP</button>
        </div>
        {generateOTP && (
          <>
            {count > 0 ? (
              <p className='text-xs'>
                OTP Sent! ({count} seconds remaining)
              </p>
            ) : (
              <p onClick={otpGenerate} className='text-xs text-[#fb7185] no-underline cursor-pointer hover:underline'>
                Resend OTP
              </p>
            )}
          </>
        )}
        <div
          className="h-[50px] w-full mt-[20px] rounded-[15px] relative overflow-hidden group">
          <div
            className="h-full w-[300%] absolute -left-full bg-gradient-to-l from-[#881337] to-[#fb7185] rounded-[15px] [transition:all_0.4s_ease] group-hover:left-[0]"></div>
          <input
            className="outline-none h-full w-full relative bg-none border-[none] text-[#fff] pl-0 rounded-[15px] text-[20px] font-medium cursor-pointer"
            type="submit"
            value="Signup" />
        </div>
        <div className='h-[50px] w-full mt-[20px] flex justify-center'>
          <button className="h-full w-3/4 text-center border flex justify-evenly items-center font-semibold border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
            <FcGoogle className="w-6 h-6" /><span>Continue with Google</span>
          </button>
        </div>
      </form>
    </>
  )
}

export default Signup;