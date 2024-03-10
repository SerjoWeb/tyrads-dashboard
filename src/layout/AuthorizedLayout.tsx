import React from 'react';
import Aside from '../components/shared/Aside';
import MainContent from '../components/shared/MainContent';

interface IAuthorized {
  body: React.ReactNode;
}

const AuthorizedLayout: React.FC<IAuthorized> = ({ body }): React.ReactElement => {
  return (
    <div className='h-[100svh] w-full relative overflow-hidden flex justify-start items-start'>
      <Aside />
      <MainContent body={body} />
    </div>
  );
};

export default AuthorizedLayout;
