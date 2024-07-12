import { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
export default function Auth() {
  const [togglePage, settoggle] = useState(true)
  return (
    <>
      <div className="overflow-hidden max-w-[390px] bg-[#fff] p-[30px] rounded-[15px] [box-shadow:0px_15px_20px_rgba(0,0,0,0.1)]">
        <div className="flex w-[200%]">
          <div class={`w-1/2 text-[35px] font-semibold text-center [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)] ${togglePage?'ml-0':'ml-[-50%]'}`}>Login Form</div>
          <div class={`w-1/2 text-[35px] font-semibold text-center [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)] signup`}>Signup Form</div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="relative flex h-[50px] w-full overflow-hidden ml-[0] mr-[0] my-[30px] justify-between border-[1px] border-[solid] border-[lightgrey] rounded-[15px]">
            <div class={`absolute h-full w-1/2 left-[0] z-0 rounded-[15px] bg-gradient-to-l from-[#881337] to-[#fb7185] [transition:all_0.6s_cubic-bezier(0.68,-0.55,0.265,1.55)] ${togglePage ? '' : 'left-2/4'}`}></div>
            <label htmlFor="login" onClick={()=>settoggle(true)} class={`h-full w-full text-[18px] z-10 font-medium text-center leading-[48px] cursor-pointer [transition:all_0.6s_ease] bg-transparent ${togglePage ? 'text-white' : 'text-black' }`}>Login</label>
            <label htmlFor="signup" onClick={()=>settoggle(false)} class={`h-full w-full text-[18px] z-10 font-medium text-center leading-[48px] cursor-pointer [transition:all_0.6s_ease] bg-transparent ${togglePage ? 'text-black' : 'text-white' }`}>Signup</label>
          </div>
          <div className="flex w-[200%]">
            <Login move={togglePage} setMove={settoggle}/>
            <Signup />
          </div>
        </div>
      </div>
    </>
  )
}