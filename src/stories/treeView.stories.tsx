import { type Story, type Meta } from '@storybook/react';
import TreeView from '@/components/TreeView';
import { mock } from '@/shared/mockData';
import { CheckboxProvider } from '@/hooks/tree-view';

const Template: Story<any> = (args) => (
  <CheckboxProvider inputData={mock}>
    <TreeView {...args} />
  </CheckboxProvider>
);

export const Primary: any = Template.bind({});
Primary.args = {
  mock,
};

const meta: Meta = {
  title: 'O Exemplo do colapse',
  component: TreeView,
  parameters: {
    mock,
  },
  argTypes: {
    mock,
  },
};

export default meta;
