import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {
    const nav = useNavigate();
    return (
        <div className='h-[380px] mt-20'>
            <lottie-player src="https://lottie.host/17908705-49e7-4e93-bb25-8196988bd9d2/716tUa6Xc2.json"
                background="transparent" speed="1" loop autoplay></lottie-player>
                <button onClick={()=> nav('/')} className=' w-full hover:text-gray-800'>Back To Home</button>
        </div>
        
    )
}

export default NotFound
