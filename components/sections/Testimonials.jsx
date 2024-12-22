import Image from 'next/image'
import React from 'react'
import Conatiner from '../Conatiner'
import { testimonials } from '@/constants/dummy';
import { Rating } from '@mui/material';

const Testimonials = () => {
  return (
    <div className="md:flex md:flex-row-reverse mb-10">
      <div className="relative md:hidden flex justify-center motion-scale-in-[1.63] motion-translate-x-in-[3%] motion-translate-y-in-[8%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-ease-spring-bouncier">
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
          className=" -z-10 absolute bottom-5 "
        />
        <Image
          src={"/icons/pattern.svg"}
          width={305}
          height={280}
          alt="worker"
          className=" -z-10 absolute bottom-5"
        />
      </div>
      <div>
        <Image src={"/images/grp.png"} width={725} height={750} alt='img' className='hidden md:block motion-scale-in-[1.63] motion-translate-x-in-[3%] motion-translate-y-in-[8%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-ease-spring-bouncier ' /> 
      </div>
      <div className="flex flex-col">
        <Conatiner
          title={"Testimonials"}
          h1={"Shining Light on Our Happy Clients"}
          textAllign={"my-8 text-start"}
        />
        <div className="relative space-y-3 ">
        <Image src={"/icons/quoteillus.svg"} width={46} height={35} alt='quote' className='absolute z-20 top-0 -left-2' />
          {testimonials.map((user) => (
            <div className="text-center group  max-w-[600px]  bg-gradient-to-b from-solarYellow to-deepTeal p-0.5 bg-opacity-50 rounded-md hover:p-1 hover:motion-preset-slide-right">
              <div className="bg-white rounded-md md:flex-row flex-col flex items-center p-1 group-hover:bg-deepTeal">
                <Image
                  src={"/images/persona.png"}
                  width={150}
                  height={150}
                  alt="persona"
                  className=""
                />
                <div className='md:flex-col-reverse md:flex items-center gap-2'>
                  <h2 className="font-bold group-hover:text-white">
                    {user.userName}{" "}
                    <span className="font-medium text-sm pl-1 ">
                      {user.profession}
                    </span>
                  </h2>
                  <p className="pb-0.5 group-hover:text-white">{user.feedback}</p>
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
