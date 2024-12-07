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

    const handleClick = async (e)=>{
        e.preventDefault();
        const data = await fetch('/api/auth',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(credentials)
        });
        const response = await data.json();
        console.log(response);
        if(response.ok){
            router.push('/dashboard');
        } else{
            console.log('response was not okay')
        }
    }
  return (
    <form className='flex flex-col items-center justify-between gap-3' onSubmit={(e)=>handleClick(e)}>
        <input type='text' name='email' value={credentials.email} 
            onChange={(e)=>setCredentials({...credentials, email:e.target.value})}
            className='w-[150px] outline-4 justify-between bg-slate-400 rounded-lg'
        />
        <input type='password' name='password' value={credentials.password}
            onChange={(e)=>setCredentials({...credentials, password:e.target.value})}
            className='w-[150px] outline-4 justify-between bg-slate-400 rounded-lg'
        />
        <button className='bg-blue-500 rounded-lg justify-between w-[100px]'
            type='submit'
        >Login</button>
    </form>
  )
}

export default page