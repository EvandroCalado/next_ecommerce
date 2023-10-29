import { FC } from 'react';
import { CardProduct } from '..';
import { TypeProduct } from '../../types';

export type CardGridProps = {
  products: TypeProduct[];
};

export const CardGrid: FC<CardGridProps> = (props) => {
  const { products } = props;

  return (
    <div className="my-8 grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <CardProduct product={product} key={product.id} />
      ))}
    </div>
  );
};
