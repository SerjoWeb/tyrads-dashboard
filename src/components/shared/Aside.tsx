import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

import { cn } from '../../utils/cn';
import UpgradePremium from './UpgradePremium';

const Aside = (): React.ReactElement => {
  return (
    <aside
      className={cn(`
        w-full max-w-[280px] h-full relative overflow-hidden 
        border-r bg-white border-gray-light py-6 px-5 flex flex-col
      `)}
    >
      <div className='min-h-[84px]'>
        <Logo />
      </div>

      <div className='flex-1'>
        <Navigation />
      </div>

      <UpgradePremium />
    </aside>
  );
};

export default Aside;
