import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card
}as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}>
  <p>Text</p>
  <p>Text Text Text</p>
  <p>Text Text Text Text</p>
  <p>Text Text Text Text</p>
</Card>;

export const Default = Template.bind({});
Default.args = {
  title: 'Default title',

}