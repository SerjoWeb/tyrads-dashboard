import React from 'react';

interface ICard {
  body: React.ReactNode;
}

const Card: React.FC<ICard> = ({ body }): React.ReactElement => {
  return (
    <div className='w-fit h-auto py-4 px-5 rounded-lg bg-white shadow-md'>
      {body}
    </div>
  );
};

export default Card;
