import React from 'react';

import { IoCloudySharp } from 'react-icons/io5';

const Logo = (): React.ReactElement => {
  return (
    <div className='flex justify-start items-center gap-x-4'>
      <IoCloudySharp size={44} className='fill-blue' />
      <h1 className='text-xl font-semibold text-blue'>
        cloudcash
      </h1>
    </div>
  );
};

export default Logo;
