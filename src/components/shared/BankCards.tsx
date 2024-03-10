import React from 'react';
import Card from './Card';

import { cn } from '../../utils/cn';

const BankCard = (): React.ReactElement => {
  const [diactivated, setDiactivated] = React.useState<boolean>(false);

  return (
    <Card
      body={
        <div className='max-w-full h-auto flex flex-col'>
          <p className='text-lg text-primary font-semibold'>
            Card <span className={cn('transition-all duration-500 text-red font-semibold', diactivated ? 'opacity-100' : 'opacity-0')}>
              Diactivated
            </span>
          </p>

          <div className='w-full flex gap-x-4 mt-4'>
            <div className='flex-1'>
              <img
                about='Credit Card'
                src='/credit-card.png'
                loading='eager'
                width={369}
                height={255}
              />

              <div className='w-full'>
                <div className='w-full bg-gray-light rounded-full h-2.5'>
                  <div className='bg-blue h-2.5 rounded-full transition-all duration-500 animate-pulse w-[15%]' />
                </div>
                <div className='flex justify-between mt-2'>
                  <span className='text-sm text-secondary'>Weekly payment limit</span>
                  <span className='text-sm text-primary'>$350.60 / $4000</span>
                </div>
              </div>
            </div>

            <div className='w-auto'>
              <div className='flex flex-col gap-y-4'>
                <div className='text-right'>
                  <p className='text-4xl text-blue font-semibold'>$ 2850.75</p>
                  <p className='text-sm text-secondary'>Current balance</p>
                </div>

                <div className='text-right'>
                  <p className='text-xl text-green font-semibold'>$ 1500.50</p>
                  <p className='text-sm text-secondary'>Income</p>
                </div>

                <div className='text-right'>
                  <p className='text-2xl text-red font-semibold'>$ 350.60</p>
                  <p className='text-sm text-secondary'>Outcome</p>
                </div>
              </div>

              <label className='flex flex-col items-end gap-y-2 cursor-pointer mt-14'>
                <input
                  type='checkbox'
                  className='sr-only peer'
                  checked={diactivated}
                  onChange={() => setDiactivated(!diactivated)}
                />
                <div
                  className={cn(`
                    relative w-11 h-[24.5px] bg-gray-light rounded-full peer dark:bg-gray-700 
                    peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
                    after:start-[2px] after:bg-white after:border-white after:border after:rounded-full 
                    after:h-5 after:w-5 after:transition-all after:duration-500 dark:border-gray-600 
                    peer-checked:bg-blue-600
                  `)}
                />

                <span className='ms-3 text-xs text-secondary'>
                  Deacivate card
                </span>
              </label>
            </div>
          </div>
        </div>
      }
    />
  )
}

export default BankCard;
