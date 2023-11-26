import React, { useState } from 'react'
import SignUp from '../components/SignUp'
import Login from '../components/Login'

const AuthNavigator = () => {
    const [isSelected,setIsSelected] = useState(0)

  return (
    <div className='flex  bg-[#6549BF] items-center justify-center h-[100vh]'>
        <div className='bg-white p-3  shadow-lg flex rounded-md'>
            {/* login and signUp screen */}
            <div className=''>
                <ul className='flex text-2xl font-semibold trans'>
                    <li onClick={()=>setIsSelected(0)} className={`${isSelected===0?'underline transition ease-in-out  text-red-400':''} cursor-pointer ` }>Login</li>
                    <li onClick={()=>setIsSelected(1)} className={`${isSelected===1?'underline transition ease-in-out  text-red-400':''} ml-10 cursor-pointer ` }>Register</li>
                </ul>
                {
                    isSelected ===0 ?
                    (<Login />)
                    :
                    (<SignUp />)
                }
            </div>
            
        </div>
    </div>
  )
}

export default AuthNavigator