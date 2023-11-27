import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DashIcon,
} from '@radix-ui/react-icons';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useState } from 'react';
import {
  type CheckboxNode,
  useCheckboxActions,
  useGraph,
  useItem,
} from '@/hooks/tree-view';
import { CustomLabel } from '@/components/CustomLabel';

const TreeView = () => {
  const graph = useGraph();

  return (
    <div className="Container">
      {graph.length > 0 ? (
        graph.map((item) => <TreeViewCheckbox key={item.id} {...item} />)
      ) : (
        <p>treeview is empty</p>
      )}
    </div>
  );
};

const TreeViewCheckbox = (props: CheckboxNode) => {
  const { id, children } = props;
  const item = useItem(id);
  const hasChildren = children.length > 0;
  const { checkItem } = useCheckboxActions();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="TreeViewRoot" key={id}>
      <div className="TreeViewContainer">
        <div
          className={`chevronIconContainer ${hasChildren ? 'hasChildren' : ''}`}
        >
          {open ? (
            <ChevronUpIcon onClick={handleToggle} width="25" height="25" />
          ) : (
            <ChevronDownIcon onClick={handleToggle} width="25" height="25" />
          )}
        </div>

        <Checkbox.Root
          className={`CheckboxRoot ${
            item.status !== 'none' ? 'isChecked' : ''
          }`}
          checked={item.status !== 'none'}
          defaultChecked
          onClick={() => {
            checkItem({ id: item.id, node: props });
          }}
        >
          <Checkbox.Indicator className="CheckboxIndicator">
            <div className="icon">
              {item.status === 'partial' ? <DashIcon /> : <CheckIcon />}
            </div>
          </Checkbox.Indicator>
        </Checkbox.Root>
        <CustomLabel className="custom-label" label={item.label} />
      </div>

      <Collapsible.Root
        className="CollapsibleRoot"
        open={open}
        onOpenChange={setOpen}
      >
        <Collapsible.Content className="CollapsibleContent">
          {children.map((node) => (
            <TreeViewCheckbox key={node.id} {...node} />
          ))}
        </Collapsible.Content>
      </Collapsible.Root>
    </div>
  );
};

export default TreeView;
