import React from 'react';
import Header from './Header';

interface IMainContent {
  body: React.ReactNode;
}

const MainContent: React.FC<IMainContent> = ({ body }): React.ReactElement => {
  return (
    <div className='h-full flex-1 flex flex-col pr-2 pb-2'>
      <Header />

      <main className='flex-1 relative overflow-x-auto py-4 mt-2 px-12'>
        {body}
      </main>
    </div>
  );
};

export default MainContent;
