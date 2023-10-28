import { Meta, StoryFn } from '@storybook/react';
import { CardGrid, CardGridProps } from '.';

import products from '../../lib/data.json';

export default {
  title: 'Components/CardGrid',
  component: CardGrid,
  args: {
    products,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<CardGridProps> = (args) => <CardGrid {...args} />;
