import React from 'react'
import { FaFacebook, FaGithub, FaGooglePlusG } from "react-icons/fa";

const Login = () => {
  return (
    <div className=' p-3  md:flex shadow-lg '>
      <div>
        <div >
          <label className='text-[13px]' htmlFor="">Enter your email id</label>
          <br />
          <input type="email" placeholder="Enter your email id" className='p-2  border-b-2 outline-none w-[100%] border-slate-400'/>
        </div>
        <div >
          <label className='text-[13px]' htmlFor="">Enter your password</label>
          <br />
          <input type="password" placeholder="Enter your password" className='p-2  border-b-2 outline-none w-[100%] border-slate-400'/>
        </div>
        <div>
          <label className='text-[13px] justify-end text-red-800 cursor-pointer mt-2' htmlFor="">Forgot Password?</label>
          <br />
        </div>
        
        <div className='mt-2 '>
          <button className='bg-[#FF714F] p-3 rounded-md w-[100%] text-white'>
            Login
          </button>
        </div>
      </div>

      <div className='md:ml-6 mt-3 md:mt-0'>
        <h1 className='font-bold text-xl'>Social Login</h1>
        <p className='text-slate-400  text-sm'>Quickly sign in with your social network</p>

        <div className='mt-2 bg-[#007FFF] p-3 rounded-md w-[100%] text-white flex items-center justify-center  cursor-pointer'>
            <FaGooglePlusG color="white" size={20}/>
            <p className='ml-2'>Google</p>
        </div>

        <div className='mt-2 bg-[#3C5A98] p-3 rounded-md w-[100%] text-white flex items-center justify-center  cursor-pointer'>
            <FaFacebook  color="white" size={20}/>
            <p className='ml-2'>Facebook</p>
        </div>

        <div className='mt-2 bg-[#FF714F] p-3 rounded-md w-[100%] text-white flex items-center justify-center  cursor-pointer'>
            <FaGithub  color="white" size={20}/>
            <p className='ml-2'>Github</p>
        </div>

      </div>

    </div>
  )
}

export default Login