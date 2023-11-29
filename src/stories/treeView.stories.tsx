import { type Meta } from '@storybook/react';
import TreeView from '@/components/TreeView';
import { defaultData, labelData } from '@/shared/mockData';
import { CheckboxProvider } from '@/hooks/tree-view';
import { type DataInterface } from '@/types/TreeView';

interface TemplateProps {
  mockData: DataInterface[];
}

const Template = ({ mockData }: TemplateProps) => (
  <CheckboxProvider inputData={mockData}>
    <TreeView />
  </CheckboxProvider>
);

export const DefaultLabel: any = Template.bind({});
DefaultLabel.args = {
  mockData: defaultData,
};

export const Primary: any = Template.bind({});
Primary.args = {
  mockData: labelData,
};

const meta: Meta = {
  title: 'Component Example',
  component: TreeView,
  parameters: {
    argTypes: {
      mockData: {
        name: 'TreView',
        description: 'Dados de exemplo para o componente TreeView',
      },
    },
  },
};

export default meta;
