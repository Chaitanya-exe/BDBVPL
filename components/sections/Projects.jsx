import React from 'react'
import Conatiner from '../Conatiner'
import { projectsdetail } from '@/constants/dummy';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className='bg-skyBlue py-10'>
      <Conatiner
        title={"Our projects"}
        h1={"Our Brightest Achievements"}
        h2={"Powering Communities, One Panel at a Time"}
        textAllign={"text-center"}
      />
      <div className='flex flex-wrap gap-2.5 my-6'>
      {projectsdetail.map((project)=>(
        <Image src={`/images/p${project.id}.png`} width={373} height={200} alt='img' className='' />
      ))}

      </div>
    </div>
  );
}

export default Projects
