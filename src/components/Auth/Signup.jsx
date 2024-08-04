import React, { useEffect, useState, useRef, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

const Signup = ({ move, setMove, changeView }) => {
  const {OTP, autherisation, setAutherisation} = useContext(AuthContext);
  const [generateOTP, setGenerateOTP] = useState(false);
  const [otpText, setOtpText] = useState(false);
  const [otpV, setOtpV] = useState("");
  const [count, setCount] = useState(60);
  const [resendOTP, setResendOTP] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [otpInputs, setOtpInputs] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (generateOTP) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
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


  const handleOtpChange = (value, index) => {
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = value;

    if (value.length === 1 && index < otpInputs.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    setOtpInputs(newOtpInputs);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otpInputs[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const isOtpValid = ( () => OTP === otpInputs.join(''));

  return (
    <>
      <form
        action="#"
        className="w-1/2 [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)]"
      >
        <h2 className='font-semibold text-[25px] text-center sm:mt-[10px] mt-[20px]'>Verify Your OTP</h2>
        <div className="h-[50px] mb-4 md:mb-[60px] w-full mt-6 md:mt-[50px] flex items-center">
          <div className="flex space-x-6">
            {[...Array(4)].map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)} 
                className="h-[3rem] w-[3rem] md:h-[4rem] md:w-[4rem] text-center font-bold outline-none rounded-xl md:rounded-[15px] border-[2px] border-[solid] border-[#5c5b5b] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]"
                inputMode="numeric"
                maxLength={1}
                required
                value={otpInputs[index]}
                onChange={(e) => handleOtpChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)} 
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="sm:pl-[190px] pl-[150px] text-sm sm:text-base -mb-[15px] sm:pb-[40px] lg:pb-[60px] sm:-mt-[40px]  text-blue-500 decoration-none border-none rounded-lg"
            type="button"
          >
            Resend OTP
          </button>
        </div>

        <div className="flex items-center mt-[25px] sm:-mt-[20px] md:mb-[10px]">
          <input
            type="checkbox"
            id="acceptTerms"
            className="mr-2 mt-0"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label htmlFor="acceptTerms" className="text-[16px] text-sm">
            I have read and agree to the <Link to="/Privacy-policy" onClick={() => changeView(false)} className="font-semibold hover:underline">Privacy Policy</Link> and <Link to="/terms-and-conditions" onClick={() => changeView(false)} className="font-semibold hover:underline">Terms of Service.</Link>
          </label>
        </div>
        <div className="flex">
          <div className='border mt-2 w-[100%] px-4 py-2 text-white bg-gradient-to-l from-rose-700 to-rose-300 rounded-[15px] text-center text-[20px] font-medium cursor-pointer'>
            <NavLink to={autherisation ? '':'/profile'}>
              <button onClick={() => {setAutherisation(acceptTerms || isOtpValid); changeView(false)}} type="submit" disabled={!acceptTerms || !isOtpValid}>
                <span>Verify & Continue</span>
              </button>
            </NavLink>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
