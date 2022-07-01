import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';
export default {
  title: 'Components/Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}>
  <div className="logo">
    <span>
    Logo
    </span>
    
  </div>
  <nav className="menu">
    <ul>
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
    </ul>
  </nav>
</Header>;
export const Default = Template.bind({});
