"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const page = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleClick = async () => {
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const data = await response.json();
      const result = data.ok;
      console.log(result);
      if (result === true) {
        router.push('/admin/dashboard');
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col items-center justify-between gap-3 my-[100px]">
      <div style={{ minWidth: "30%" }}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              src="/images/logo.jpg"
              width={60}
              height={60}
              alt="bdbvpl pvt ltd"
              className="mx-auto h-15 w-auto"
            />
            {/* <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            /> */}

            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign In to Dashboard
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  {/* <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    /> */}
                  <input
                    id="email"
                    type="text"
                    name="email"
                    required
                    value={credentials.email}
                    onChange={(e) =>
                      setCredentials({ ...credentials, email: e.target.value })
                    }
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  {/* <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  /> */}
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-green sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                {/* <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button> */}
                <button
                  className="flex w-full justify-center rounded-md bg-green px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                  onClick={handleClick}
                >
                  Login
                </button>
                {error && <p>Invalid credentials</p>}
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Forgot Password?{" "}
              <span
                href="#"
                className="font-semibold text-green hover:text-green cursor-pointer"
              >
                Help
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <input type='text' name='email' value={credentials.email}
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
            {error && <p>Invalid credentials</p>} */}
    </div>
  );
};

export default page;
