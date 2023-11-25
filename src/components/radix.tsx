import { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';

interface IProps {
  title: string;
}
const CollapseDemo = ({ title }: IProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={open}
      onOpenChange={setOpen}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span className="Text" style={{ color: 'white' }}>
          {title}
        </span>
        <Collapsible.Trigger asChild>
          <button className="IconButton">
            {open ? <Cross2Icon /> : <RowSpacingIcon />}
          </button>
        </Collapsible.Trigger>
      </div>

      <div className="Repository">
        <span className="Text">este e mais um</span>
      </div>

      <Collapsible.Content>
        <div className="Repository">
          <span className="Text"> este e um componente </span>
        </div>
        <div className="Repository">
          <span className="Text">este e outro componente</span>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

export default CollapseDemo;
