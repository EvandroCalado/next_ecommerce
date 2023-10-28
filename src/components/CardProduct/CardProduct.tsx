import Link from 'next/link';
import { FC } from 'react';
import { CardImage } from '..';
import { TypeProduct } from '../../types/typeProduct';

export type CardProductProps = {
  product: TypeProduct;
};

export const CardProduct: FC<CardProductProps> = (props) => {
  const { product } = props;

  return (
    <Link
      href={`/products/${product.id}`}
      className="flex h-96 flex-col rounded-2xl bg-white p-4 shadow-2xl duration-150 hover:opacity-90"
    >
      <div className="relative max-h-72 flex-1">
        <CardImage product={product} fill />
      </div>

      <div className="my-4 flex flex-col gap-4">
        <h2 className="line-clamp-1 text-xl font-semibold text-zinc-900">
          {product.title}
        </h2>
        <span className="font-semibold text-indigo-600">
          R$ {product.price}
        </span>
      </div>

      <button className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white duration-150 hover:bg-indigo-700">
        Adicionar
      </button>
    </Link>
  );
};
