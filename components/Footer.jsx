import Image from 'next/image';
import React from 'react'
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="text-white md:flex flex-col flex gap-7  bg-deepTeal py-8 px-14 relative overflow-hidden">
    <Image src={"/icons/footerillus.svg"} width={112} height={105} alt='illus' className='absolute -top-10 right-0' />
      <div>
        <h1 className="h1Text">About us</h1>
        <p className="pText border-b border-white/30 py-2 text-white/80">
          Annual savings of $18,000 on electricity costs. Boosted company’s
          green credentials with a 35% reduction in carbon footprint
        </p>
        <p className="pt-3 text-white/80">
          Copyright © 2024 BVB All rights reserved.
        </p>
      </div>
      <div>
        <h1 className="h1Text">Company links</h1>
        <ul className=' *:text-white/80 space-y-2 py-2 *:cursor-pointer'>
          <li className='pText hover:text-white'>Home</li>
          <li className='pText hover:text-white'>about us</li>
          <li className='pText hover:text-white'>services</li>
          <li className='pText hover:text-white'>projects</li>
          <li className='pText hover:text-white'>Contact us</li>
        </ul>
      </div>
      <div>
        <h1 className="h1Text">Contact informaiton</h1>
        <p className="pText pt-2 text-white/80">Company Regd. Add -</p>
        <p className="pText pt-2 text-white/80">
          F-12 Ground floorviswakarma colony,new delhi 110044(India){" "}
        </p>
        <p className=" pt-2 text-white/80 flex items-center">
          <MdEmail className="inline-flex size-6 mr-1" />
          <span> contactbdbvpl@gmail.com </span>
        </p>
        <p className="pText pt-2 text-white/80 flex items-center">
          <FaPhone className="inline-flex size-5 mr-2" />
          <span>9312644140 </span>
        </p>
      </div>
    </div>
  );
}

export default Footer
