import React from 'react';
import Button from '../ui/Button';

import { IoIosArrowRoundUp } from 'react-icons/io';

const UpgradePremium = (): React.ReactElement => {
  return (
    <div className='flex flex-col gap-y-4 justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-y-2'>
        <img
          about='Upgrade Premium'
          src='/upgrade-premium.svg'
          loading='eager'
          width={72}
          height={81}
        />

        <p className='text-base text-gray text-center'>
          Give your money an<br />awesome space in the cloud
        </p>
      </div>

      <Button
        type='button'
      >
        Upgrade to premium
        <IoIosArrowRoundUp size={22} />
      </Button>
    </div>
  )
}

export default UpgradePremium