import React from 'react'
import { withReactContext } from 'storybook-react-context';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'link'],
      control: { type: 'radio'}
    },
    size: {
      options: ['small','medium','large'],
      control: {type: 'radio'}
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 'medium',
  label: 'Button'
}
Default.decorators = [withReactContext];