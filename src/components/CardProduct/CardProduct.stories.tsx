import { Meta, StoryFn } from '@storybook/react';
import { CardProduct, CardProductProps } from '.';

import product from '../../lib/data.json';

export default {
  title: 'Components/CardProduct',
  component: CardProduct,
  args: {
    product: product[0],
  },
} as Meta;

export const Default: StoryFn<CardProductProps> = (args) => (
  <CardProduct {...args} />
);
