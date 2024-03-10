import React from 'react';
import Card from './Card';

import { CiShoppingCart, CiUser } from 'react-icons/ci';
import { PiCarProfile } from 'react-icons/pi';
import { IoLeafOutline } from 'react-icons/io5';

interface ITransactionHistory {
  reciever: string;
  recieverIcon: React.ReactNode;
  type: string;
  date: Date | string;
  amount: number;
} 

const TransactionHistory = (): React.ReactElement => {
  const transactionHistory: ITransactionHistory[] = [
    {
      reciever: 'Tesco Market',
      recieverIcon: <CiShoppingCart />,
      type: 'Shopping',
      date: '2024-03-10T06:11:24.207Z',
      amount: 75.67
    },
    {
      reciever: 'ElectroMan Market',
      recieverIcon: <PiCarProfile />,
      type: 'Shopping',
      date: '2024-03-06T06:11:24.207Z',
      amount: 250.00
    },
    {
      reciever: 'Fiorgio Restaurant',
      recieverIcon: <IoLeafOutline />,
      type: 'Food',
      date: '2024-03-06T06:11:24.207Z',
      amount: 19.50
    },
    {
      reciever: 'John Mathew Kayne',
      recieverIcon: <CiUser />,
      type: 'Sport',
      date: '2024-03-04T06:11:24.207Z',
      amount: 350
    },
    {
      reciever: 'Ann Marlin',
      recieverIcon: <CiUser />,
      type: 'Shopping',
      date: '2024-03-01T06:11:24.207Z',
      amount: 430
    }
  ];

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  return (
    <Card
      body={
        <div className='max-w-full h-auto flex flex-col'>
          <p className='text-lg text-primary font-semibold'>
            Transaction History
          </p>

          <div className='w-full mt-4'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='text-sm text-secondary py-4 pr-12 text-left'>Reciever</th>
                  <th className='text-sm text-secondary py-4 pr-12 text-left'>Type</th>
                  <th className='text-sm text-secondary py-4 pr-12 text-left'>Date</th>
                  <th className='text-sm text-secondary py-4 pr-12 text-right'>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((item, index) => (
                  <tr key={index} className='border-b border-gray-light'>
                    <td className='text-sm text-primary py-2 pr-12 flex items-center gap-x-2'>
                      <div className='flex justify-center items-center h-[32px] w-[32px] bg-gray-light rounded-full'>
                        {item.recieverIcon}
                      </div>

                      {item.reciever}
                    </td>
                    <td className='text-sm text-secondary py-2 pr-12'>{item.type}</td>
                    <td className='text-sm text-secondary py-2 pr-12'>{formatDate(item.date as string)}</td>
                    <td className='text-sm font-semibold text-primary py-2 pr-12 text-right'>${item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
    />
  );
};

export default TransactionHistory;
