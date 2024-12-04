'use client';

import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
    const [credentials, setCredentials] = useState({
        email:"",
        password:""
    });

    const router = useRouter();

    const handleClick = async ()=>{
        const data = await fetch('/api/auth',{
            method:"POST",
            body:JSON.stringify(credentials)
        });
        const response = await data.json();
        console.log(response.Authorization);
        if(response.ok){
            router.push('/dashboard');
        }
    }
  return (
    <div className='flex flex-col items-center justify-between gap-3'>
        <input type='text' name='email' value={credentials.email} 
            onChange={(e)=>setCredentials({...credentials, email:e.target.value})}
            className='w-[150px] outline-4 justify-between bg-slate-400 rounded-lg'
        />
        <input type='password' name='password' value={credentials.password}
            onChange={(e)=>setCredentials({...credentials, password:e.target.value})}
            className='w-[150px] outline-4 justify-between bg-slate-400 rounded-lg'
        />
        <button className='bg-blue-500 rounded-lg justify-between w-[100px]'
            onClick={handleClick}
        >Login</button>
    </div>
  )
}

export default page