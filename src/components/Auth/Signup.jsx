import React, { useEffect, useState, useRef, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

const Signup = ({ move, setMove, changeView }) => {
  const { OTP, autherisation, setAutherisation } = useContext(AuthContext);
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

  const isOtpValid = (() => OTP === otpInputs.join(''));

  return (
    <>
      <form
        action="#"
        className="w-1/2 [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)] flex flex-col items-center justify-center"
      >
        <h2 className='font-semibold text-[20px] mt-8 md:text-[25px] text-center'>Verify Your OTP</h2>
        <div className="h-[50px] w-full mt-6 lg:mt-8 flex items-center justify-evenly">
          {[...Array(4)].map((_, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              className="h-[3rem] w-[3rem] md:h-[3rem] md:w-[3rem] text-center font-bold outline-none rounded-xl md:rounded-[15px] border-[2px] border-[solid] border-[#5c5b5b] border-b-2 text-[17px] [transition:all_0.3s_ease] focus:border-[#fda4af] placeholder:text-[#999] placeholder:[transition:all_0.3s_ease] focus:placeholder:text-[#fb7185]"
              inputMode="numeric"
              maxLength={1}
              required
              value={otpInputs[index]}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        <div className="mt-2 lg:mt-4 ml-auto">
          <button
            className="text-xs md:text-sm text-blue-500 decoration-none border-none rounded-lg"
            type="button"
          >
            Resend OTP
          </button>
        </div>

        <div className="flex gap-4 mt-4 ">
          <input
            type="checkbox"
            id="acceptTerms"
            className="mt-0 lg:w-6 lg:h-6"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label htmlFor="acceptTerms" className="text-xs">
            I have read and agree to the <Link to="/Privacy-policy" onClick={() => changeView(false)} className="font-semibold hover:underline">Privacy Policy</Link> and <Link to="/terms-and-conditions" onClick={() => changeView(false)} className="font-semibold hover:underline">Terms of Service.</Link>
          </label>
        </div>
        <div className='border mt-4 md:mt-[20px] px-4 py-2 text-white bg-gradient-to-l from-[#881337] to-[#fb7185] w-full rounded-md text-center text-sm md:text-[15px] font-medium cursor-pointer'>
          <NavLink to={autherisation ? '' : '/profile'}>
            <button onClick={() => { setAutherisation(acceptTerms || isOtpValid); changeView(false) }} type="submit" disabled={!acceptTerms || !isOtpValid}>
              <span>Verify & Continue</span>
            </button>
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default Signup;
