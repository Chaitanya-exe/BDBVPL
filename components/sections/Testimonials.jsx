import Image from 'next/image'
import React from 'react'
import Conatiner from '../Conatiner'
import { testimonials } from '@/constants/dummy';
import { Rating } from '@mui/material';

const Testimonials = () => {
  return (
    <div className="md:flex md:flex-row-reverse mb-10">
      <div className="relative flex justify-center">
        <Image
          src={"/images/testimonialimg.png"}
          width={220}
          height={366}
          alt="worker"
          className="relative"
        />
        <Image
          src={"/images/blob.png"}
          width={330}
          height={280}
          alt="worker"
          className=" -z-10 absolute bottom-5"
        />
        <Image
          src={"/icons/pattern.svg"}
          width={305}
          height={280}
          alt="worker"
          className=" -z-10 absolute bottom-5"
        />
      </div>
      <div className="flex flex-col">
        <Conatiner
          title={"Testimonials"}
          h1={"Shining Light on Our Happy Clients"}
          textAllign={"text-center my-8"}
        />
        <div className="relative space-y-3">
        <Image src={"/icons/quoteillus.svg"} width={46} height={35} alt='quote' className='absolute top-0 -left-2' />
          {testimonials.map((user) => (
            <div className="text-center bg-gradient-to-b from-solarYellow to-deepTeal p-0.5 bg-opacity-50 rounded-md  ">
              <div className="bg-white rounded-md md:flex flex-col flex items-center p-1">
                <Image
                  src={"/images/persona.png"}
                  width={150}
                  height={150}
                  alt="persona"
                  className=""
                />
                <div>
                  <h2 className="font-bold">
                    {user.userName}{" "}
                    <span className="font-medium text-sm pl-1">
                      {user.profession}
                    </span>
                  </h2>
                  <p className="pb-0.5">{user.feedback}</p>
                  <Rating name="read-only" value={5} readOnly />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials
