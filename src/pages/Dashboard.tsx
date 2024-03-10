import React from 'react';
import BankCard from '../components/shared/BankCards';
import TransactionHistory from '../components/shared/TransactionHistory';
import Goals from '../components/shared/Goals';
import OutcomeStatistics from '../components/shared/OutcomeStatistics';

const Dashboard = (): React.ReactElement => {
  return (
    <div className='w-full h-auto flex flex-wrap gap-10'>
      <BankCard />
      <Goals />
      <TransactionHistory />
      <OutcomeStatistics />
    </div>
  );
};

export default Dashboard;
