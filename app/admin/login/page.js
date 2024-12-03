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
        if(response.ok){
            router.push('/dashboard');
        }
    }
  return (
    <div className='flex flex-col align-items justify-between'>
        <input type='text' name='email' value={credentials.email} 
            onChange={(e)=>setCredentials({...credentials, email:e.target.value})}
        />
        <input type='password' name='password' value={credentials.password}
            onChange={(e)=>setCredentials({...credentials, password:e.target.value})}
        />
        <button className='bg-green-500 rounded-lg'
            onClick={handleClick}
        >Login</button>
    </div>
  )
}

export default page