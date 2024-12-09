'use client';

import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(false)

    const router = useRouter();

    const handleClick = async () => {
        try {
            const response = await fetch('/api/auth', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                redirect: "follow",
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            });
            const data = await response.json();
            const result = data.ok;
            console.log(result)
            if(result === true){
                router.replace("/admin/dashboard")
            } else{
                setError(true)
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='flex flex-col items-center justify-between gap-3'>
            <input type='text' name='email' value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                className='w-[150px] outline-4 justify-between bg-slate-400 rounded-lg'
            />
            <input type='password' name='password' value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className='w-[150px] outline-4 justify-between bg-slate-400 rounded-lg'
            />
            <button className='bg-blue-500 rounded-lg justify-between w-[100px]'
                onClick={handleClick}
            >Login</button>
            {error && <p>Invalid credentials</p>}
        </div>
    )
}

export default page