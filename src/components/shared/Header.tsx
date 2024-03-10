import React from 'react';
import Notifications from './Notifications';
import Account from './Account';

const Header = (): React.ReactElement => {
  return (
    <header className='w-full flex justify-between items-center shadow-sm py-6 px-12'>
      <div className='flex flex-col gap-y-2'>
        <h2 className='text-5xl text-primary font-semibold'>Weekly sumup</h2>
        <p className='text-xl text-secondary'>Get summary of your weekly online transactions here.</p>
      </div>

      <div className='flex items-center gap-x-12'>
        <Notifications />
        <Account />
      </div>
    </header>
  )
}

export default Header;
