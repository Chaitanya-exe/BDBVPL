import React from 'react'
import Conatiner from '../Conatiner'
import Image from 'next/image';

const QuerySec = () => {
  return (
    <div className='relative'>
      <Conatiner
        title={"Query section"}
        h1={"Got Questions? We’re Here to Help You Go Solar!"}
        textAllign={"text-center"}
      />
      <Image src={"/icons/queryillus.svg"} width={120} height={112} alt='' className='absolute -right-3 -top-14 -z-10'/>
      <form>
        <div>
            
        </div>
      </form>
    </div>
  );
}

export default QuerySec
