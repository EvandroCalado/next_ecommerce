'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { TypeProduct } from '../../types';

export type CardImageProps = {
  product: TypeProduct;
  fill?: boolean;
};

export const CardImage: FC<CardImageProps> = (props) => {
  const { product, fill } = props;

  const [loading, setLoading] = useState(true);

  return fill ? (
    <Image
      src={product.image}
      alt={product.title}
      fill
      className={`object-contain ${
        loading
          ? 'scale-110 blur-3xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      }`}
      onLoad={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.image}
      alt={product.title}
      width={400}
      height={700}
      className={`object-contain ${
        loading
          ? 'scale-110 blur-3xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      }`}
      onLoad={() => setLoading(false)}
    />
  );
};
