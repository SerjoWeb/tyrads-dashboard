import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const NotAuthorizedLayout = (): React.ReactElement => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='w-full max-w-[460px] py-4 px-5 rounded-lg bg-white shadow-md'>
        <LoginForm />
      </div>
    </div>
  );
};

export default NotAuthorizedLayout;
