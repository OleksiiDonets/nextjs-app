import React from "react";
import { withReactContext } from 'storybook-react-context';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from "./Select";
import { sortItems } from "../../common/types";

export default {
  title: 'Components/Select',
  component: Select,

} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {... args} />;

export const Default = Template.bind({});
Default.args = {
  labelSelect: 'Story select',
  filterName: 'example',
  arrItems: sortItems 
}