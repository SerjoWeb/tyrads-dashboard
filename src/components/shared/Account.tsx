import React from 'react';
import Button from '../ui/Button';

import { account } from '../../store/account';
import { cn } from '../../utils/cn';
import { STORAGE } from '../../common/constants';

const Account = (): React.ReactElement => {
  const { user, setUser } = account();

  const [menu, setMenu] = React.useState<boolean>(false);

  const onLogoutHandler = (): void => {
    window.localStorage.removeItem(STORAGE);
    setUser(undefined);
  };

  return (
    <div className='relative'>
      <button
        type='button'
        className='flex gap-x-2 transition-all duration-500 hover:bg-gray/10 py-2 px-4 rounded-lg'
        onClick={() => setMenu(!menu)}
      >
        <div className='h-[45px] w-[45px] aspect-square relative overflow-hidden rounded-full'>
          <img
            about={user?.fullname}
            src={user?.image}
            height={45}
            width={45}
            className='h-full w-full aspect-square object-cover rounded-full'
            loading='eager'
          />
        </div>

        <div className='text-left flex flex-col'>
          <p className='text-sm text-primary font-semibold p-0 m-0'>{user?.fullname}</p>
          <p className='text-sm text-secondary p-0 m-0'>{user?.admin ? 'Admin account' : 'Guest account'}</p>
        </div>
      </button>

      <div
        className={cn(
          'absolute bottom-[-95px] right-0 py-4 px-5 rounded-lg bg-white shadow-md transition-all duration-500 z-10',
          menu ? 'block' : 'hidden'
        )}
      >
        <Button
          type='button'
          onClick={onLogoutHandler}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Account;
