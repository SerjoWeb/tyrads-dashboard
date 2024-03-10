import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { GoGraph } from 'react-icons/go';
import { MdFormatListBulleted } from 'react-icons/md';
import { LuCreditCard } from 'react-icons/lu';
import { HiOutlineDocument, HiOutlineCog6Tooth } from 'react-icons/hi2';
import { FiAward } from 'react-icons/fi';
import { cn } from '../../utils/cn';

const Navigation = (): React.ReactElement => {
  const location = useLocation();

  const menu = React.useMemo(() => {
    return [
      { icon: <GoGraph />, label: 'Overview', href: '/', active: location.pathname === '/' },
      { icon: <MdFormatListBulleted />, label: 'Transactions', href: '#', active: false },
      { icon: <LuCreditCard />, label: 'Cards', href: '#', active: false },
      { icon: <HiOutlineDocument />, label: 'Invoices', href: '#', active: false },
      { icon: <FiAward />, label: 'Goals', href: '#', active: false },
      { icon: <HiOutlineCog6Tooth />, label: 'Settings', href: '#', active: false }
    ];
  }, []);

  return (
    <menu className='flex flex-col gap-y-2 mt-12'>
      {menu.map((link, index) => (
        <li key={index}>
          <Link
            to={link.href}
            className={cn(
              `
              py-2 px-4 group text-secondary text-lg 
              flex gap-x-2 items-center transition-all 
              duration-500 hover:bg-blue/10 hover:text-blue 
              rounded-md font-semibold
              `,
              link.active && 'bg-blue/10 text-blue'
            )}
          >
            {link.icon}
            {link.label}
          </Link>
        </li>
      ))}
    </menu>
  );
};

export default Navigation;
