import React from 'react';

import { IoMail } from 'react-icons/io5';
import { GoBellFill } from 'react-icons/go';

interface INotifications {
  icon: React.ReactNode;
  label: string;
}

const Notifications = (): React.ReactElement => {
  const notifications: INotifications[] = [
    { label: 'mail', icon: <IoMail size={24} /> },
    { label: 'push', icon: <GoBellFill size={24} /> }
  ];

  return (
    <div className='flex items-center gap-x-4'>
      {notifications.map((notification, index) => (
        <button
          key={index}
          type='button'
          className='text-secondary transition-all duration-500 hover:text-primary relative'
        >
          {notification.icon}
          {notification.label === 'push' && (
            <div className='absolute top-0 right-0 h-[10px] w-[10px] rounded-full bg-red' />
          )}
        </button>
      ))}
    </div>
  );
};

export default Notifications;
