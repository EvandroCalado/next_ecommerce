import { Meta, StoryFn } from '@storybook/react';
import { CardImage, CardImageProps } from '.';

import product from '../../lib/data.json';

export default {
  title: 'Components/CardImage',
  component: CardImage,
  args: {
    product: product[0],
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<CardImageProps> = (args) => (
  <CardImage {...args} />
);
