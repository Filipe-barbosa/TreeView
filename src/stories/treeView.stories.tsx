import { type Meta } from '@storybook/react';
import TreeView from '@/components/TreeView';
import { defaultData, labelData, loadingData } from '@/shared/mockData';
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

export const HTMLLabel: any = Template.bind({});
HTMLLabel.args = {
  mockData: labelData,
};

export const Loading: any = Template.bind({});
Loading.args = {
  mockData: loadingData,
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
