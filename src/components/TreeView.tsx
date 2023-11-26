import { type DataInterface } from '@/types/TreeView';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useState } from 'react';

interface IProps {
  data: DataInterface[];
}

const TreeView = ({ data }: IProps) => {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="Container">
      {data.map((treeViewItem) => {
        const hasChildren = treeViewItem.children.length !== 0;

        return (
          <div className="TreeViewRoot" key={treeViewItem.id}>
            <div className="TreeViewContainer">
              {/* <ChevronDownIcon /> */}
              {open ? (
                <ChevronUpIcon
                  onClick={onToggle}
                  style={{ visibility: hasChildren ? 'visible' : 'hidden' }}
                />
              ) : (
                <ChevronDownIcon
                  onClick={onToggle}
                  style={{ visibility: hasChildren ? 'visible' : 'hidden' }}
                />
              )}

              <Checkbox.Root className="CheckboxRoot" defaultChecked>
                <Checkbox.Indicator className="CheckboxIndicator">
                  {treeViewItem.checked ? <CheckIcon /> : <div />}
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label>{treeViewItem.label}</label>
            </div>

            <Collapsible.Root
              className="CollapsibleRoot"
              open={open}
              onOpenChange={setOpen}
            >
              <Collapsible.Content className="CollapsibleContent">
                <TreeView data={treeViewItem.children} />
              </Collapsible.Content>
            </Collapsible.Root>
          </div>
        );
      })}
    </div>
  );
};

export default TreeView;
