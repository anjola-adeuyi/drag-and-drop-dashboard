import React from 'react';
import { TItems } from '../types';

interface CardItemProps {
  data: TItems;
  index: number;
  className: string;
}

const CardItem = ({ data, index, className }: CardItemProps) => {
  return <div>CardItem</div>;
};

export default CardItem;
