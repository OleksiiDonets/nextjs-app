import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';
import { API_URL } from "../../config";
export default {
  title: 'Components/Card',
  component: Card,
  
}as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>;

export const Default = Template.bind({});
Default.args = {
  title: 'CRS-1',
  cover: 'https://images2.imgbox.com/3e/91/hlGiK49a_o.png',
  description: `CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions.`,
  size: 'small',
  hoverable: true,
}
