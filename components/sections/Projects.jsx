import React from 'react'
import Conatiner from '../Conatiner'
import { projectsdetail } from '@/constants/dummy';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className='bg-skyBlue py-10 lg:py-14'>
      <Conatiner
        title={"Our projects"}
        h1={"Our Brightest Achievements"}
        h2={"Powering Communities, One Panel at a Time"}
        textAllign={"text-center"}
      />
      <div className='flex flex-wrap justify-center md:gap-4 gap-2.5 my-6 lg:my-10 motion-preset-expand motion-duration-2000'>
      {projectsdetail.map((project)=>(
          <Image key={project.id} src={`/images/p${project.id}.png`} width={373} height={200} alt='img' className={`hover:shadow-lg hover:shadow-text/100 hover:motion-preset-pulse hover:motion-duration-2000 ${project.id === 2 || project.id=== 3 ? "lg:w-[600px] " : "lg:w-[420px]" }`} />
      ))}

      </div>
    </div>
  );
}

export default Projects
