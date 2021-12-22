import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Buttons';

export default {
  title: 'Components/Buttons',
  component: Button,
  argTypes: {
    variant: {
      options: ['fill', 'outline', 'ghost'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ display: 'flex' }}>
    <div style={{ marginRight: '8px' }}>
      <Button {...args} size='sm'>
        {args.children}
      </Button>
    </div>
    <div style={{ marginRight: '8px' }}>
      <Button {...args} size='md'>
        {args.children}
      </Button>
    </div>
    <Button {...args} size='lg'>
      {args.children}
    </Button>
  </div>
);

export const Buttons = Template.bind({});
Buttons.args = {
  variant: 'fill',
  children: 'Button',
};