import { Meta } from '@storybook/react';
import { Example } from '.';

export default {
  title: 'Components/Example',
  component: Example,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Example />;
