import React from 'react';
import Card from './Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaCirclePlus } from 'react-icons/fa6';
import { cn } from '../../utils/cn';
import { FaMountain, FaXbox, FaCar, FaGuitar } from 'react-icons/fa';
import { FaBrush, FaUserDoctor } from 'react-icons/fa6';

import 'swiper/css';
import 'swiper/css/navigation';

interface IGoal {
  label: string;
  price: number;
  date: string;
  icon: React.ReactNode;
}

type Colors = {
  [key: string]: string;
};

const colors = {
  red: '#BB4430',
  yellow: '#FFC145',
  orange: '#F8964C',
  green: '#439A86',
  blue: '#197BBD'
};

const getRandomColor = (colors: Colors): string => {
  const colorKeys = Object.keys(colors);
  const randomIndex = Math.floor(Math.random() * colorKeys.length);
  const randomColorKey = colorKeys[randomIndex];
  return colors[randomColorKey];
};

const Goals = (): React.ReactElement => {
  const goals: IGoal[] = [
    { label: 'Holidays', price: 550, date: '03/10/24', icon: <FaMountain style={{ fill: `${getRandomColor(colors)}` }} /> },
    { label: 'Renovation', price: 200, date: '03/15/24', icon: <FaBrush style={{ fill: `${getRandomColor(colors)}` }} /> },
    { label: 'Xbox', price: 630, date: '03/16/24', icon: <FaXbox style={{ fill: `${getRandomColor(colors)}` }} /> },
    { label: 'Car', price: 2600, date: '03/28/24', icon: <FaCar style={{ fill: `${getRandomColor(colors)}` }} /> },
    { label: 'Doctor', price: 140, date: '04/05/24', icon: <FaUserDoctor style={{ fill: `${getRandomColor(colors)}` }} /> },
    { label: 'Guitar', price: 89, date: '04/08/24', icon: <FaGuitar style={{ fill: `${getRandomColor(colors)}` }} /> }
  ];

  return (
    <div className='w-full max-w-[490px] h-auto py-4 px-5'>
      <div className='w-full h-full flex flex-col'>
        <button
          type='button'
          className={cn(`
            text-lg text-primary font-semibold flex 
            items-center gap-x-2 group transition-all 
            duration-500 hover:opacity-75
          `)}
        >
          Goals
          <FaCirclePlus className='fill-yellow' />
        </button>

        <div className='w-full mt-4'>
          <Swiper
            spaceBetween={5}
            slidesPerView={3}
            navigation={true}
            loop={true}
            modules={[Navigation]}
          >
            {goals.map((goal, index) => (
              <SwiperSlide key={index} className='flex justify-center items-center'>
                <Card
                  body={
                    <div className='w-full flex flex-col gap-y-8 min-w-[90px]'>
                      <div>
                        <p className='text-xl text-primary'>${goal.price}</p>
                        <p className='text-sx text-secondary'>{goal.date}</p>
                      </div>

                      <div className='flex flex-col gap-x-2 text-lg text-primary'>
                        {goal.icon}
                        {goal.label}
                      </div>
                    </div>
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Goals;
