import { createContext, useState } from 'react';

export const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
  const [phoneNum, setPhoneNum] = useState(1234567890)
  const [OTP, setOTP] = useState(1234)
  const [autherisation, setAutherisation] = useState(false)

  return (
    <AuthContext.Provider value={{phoneNum, setPhoneNum, OTP, setOTP, autherisation, setAutherisation}}>
      {children}
    </AuthContext.Provider>
  );
};