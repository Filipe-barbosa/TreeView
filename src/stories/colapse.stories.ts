import type { Meta, StoryObj } from '@storybook/react';
import CollapseDemo from '@/components/radix';

const meta = {
  title: 'O Exemplo do colapse',
  component: CollapseDemo,
  parameters: {
    title: 'no story',
  },
  argTypes: {
    title: { control: 'silva e silva' },
  },
} satisfies Meta<typeof CollapseDemo>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Corajoso',
  },
};
