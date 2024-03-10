import React from 'react';

import { CiShoppingCart } from 'react-icons/ci';
import { PiCarProfile, PiAirplaneThin } from 'react-icons/pi';

interface IStatistics {
  label: string;
  percents: number;
  rgba: string;
  color: string;
  icon: React.ReactNode;
}

const OutcomeStatistics = (): React.ReactElement => {
  const statistics: IStatistics[] = [
    { label: 'Shopping', percents: 52, rgba: 'rgba(248, 150, 76, 0.2)', color: '#F8964C', icon: <CiShoppingCart className='fill-orange' /> },
    { label: 'Electronics', percents: 21, rgba: 'rgba(67, 154, 134, 0.2)', color: '#439A86', icon: <PiCarProfile className='fill-green' /> },
    { label: 'Travel', percents: 74, rgba: 'rgba(25, 123, 189, 0.2)', color: '#197BBD', icon: <PiAirplaneThin className='fill-blue' /> }
  ];

  return (
    <div className='w-full max-w-[490px] h-auto py-4 px-5'>
      <p className='text-lg text-primary font-semibold'>
        Outcome Statistics
      </p>
      
      <div className='w-full mt-4 flex flex-col gap-y-8'>
        {statistics.map((item, index) => (
          <div key={index} className='flex items-start gap-x-2'>
            <div className='flex-1 flex gap-x-2 relative top-3'>
              <div
                className='h-[40px] w-[40px] flex justify-center items-center rounded-lg shadow-md'
                style={{
                  backgroundColor: item.rgba
                }}
              >
                {item.icon}
              </div>
              <div className='flex-1'>
                <div className='w-full bg-gray-light rounded-full h-2.5'>
                  <div
                    className='h-2.5 rounded-full transition-all duration-500 animate-pulse'
                    style={{
                      width: `${item.percents}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
                <span className='text-sm text-secondary'>{item.label}</span>
              </div>
            </div>

            <p className='text-xl text-promary'>{item.percents}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutcomeStatistics;
