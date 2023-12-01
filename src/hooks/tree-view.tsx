import { raise } from '@/shared/exceptions';
import {
  type DataInterface,
  type State,
  type CheckBoxStatus,
  type CheckboxItem,
  type CheckboxNode,
  type CheckAction,
} from '@/types/TreeView';
import { createContext, useContext, useReducer } from 'react';

type Action = CheckAction;

function calculateItemStatus(state: State, node: CheckboxNode): CheckBoxStatus {
  const allChildrenChecked = node.children.every(
    (i) => state.itemMap[i.id].status === 'checked',
  );

  if (allChildrenChecked) {
    return 'checked';
  }

  const someItemChecked = node.children.some(
    (i) => state.itemMap[i.id].status === 'checked',
  );

  if (someItemChecked) {
    return 'partial';
  }

  return 'none';
}

const checkAllChildren = (
  node: CheckboxNode,
  status: CheckBoxStatus,
  state: State,
) => {
  const { id, label } = state.itemMap[node.id];

  state.itemMap = {
    ...state.itemMap,
    [id]: {
      id,
      label,
      status,
    },
  };

  for (const child of node.children) {
    checkAllChildren(child, status, state);
  }
};

const updateParentStatus = (node: CheckboxNode, state: State) => {
  const { id, label } = state.itemMap[node.id];
  const newStatus = calculateItemStatus(state, node);

  state.itemMap = {
    ...state.itemMap,
    [id]: {
      id,
      label,
      status: newStatus,
    },
  };

  if (node.parent != null) {
    updateParentStatus(node.parent, state);
  }
};

const reducer = (
  state: State = { itemMap: {}, graph: [] },
  action: Action | null,
): State => {
  switch (action?.type) {
    case 'check-item':
      const { node } = action.payload;
      const { status } = state.itemMap[action.payload.id];

      const newStatus = ['partial', 'none'].includes(status)
        ? 'checked'
        : 'none';

      const newState: State = { ...state };
      checkAllChildren(node, newStatus, newState);

      if (node.parent != null) {
        updateParentStatus(node.parent, newState);
      }

      return newState;

    default:
      return state;
  }
};

const initialState = reducer(undefined, null);
const CheckboxCtx = createContext<{
  state: State;
  actions: {
    checkItem: (payload: CheckAction['payload']) => void;
  };
}>({
  state: initialState,
  actions: {
    checkItem: () => raise('not implemented'),
  },
});

interface Props {
  inputData: DataInterface[];
  children: React.ReactNode;
}

function makeRecursiveGraph(
  input: DataInterface,
  state: State,
  parent?: CheckboxNode,
): CheckboxNode {
  if (state.itemMap[input.id] != null) raise('cycle found');

  state.itemMap = {
    ...state.itemMap,
    [input.id]: {
      id: input.id,
      status: input.status,
      loading: input.loading,
      label: input.label,
    },
  };

  const node: CheckboxNode = {
    parent,
    id: input.id,
    children: [],
  };

  node.children = input.children.map((child) =>
    makeRecursiveGraph(child, state, node),
  );

  return node;
}

function dataInterfaceToCheckbox(input: DataInterface[]): State {
  const initialState: State = {
    graph: [],
    itemMap: {},
  };

  initialState.graph = input.map((data) =>
    makeRecursiveGraph(data, initialState),
  );

  return initialState;
}

export function CheckboxProvider(props: Props) {
  const [state, dispatch] = useReducer(
    reducer,
    dataInterfaceToCheckbox(props.inputData),
  );

  const actions = {
    checkItem(payload: CheckAction['payload']) {
      dispatch({ type: 'check-item', payload });
    },
  };

  return (
    <CheckboxCtx.Provider
      value={{
        state,
        actions,
      }}
    >
      {props.children}
    </CheckboxCtx.Provider>
  );
}

export const useItem = (id: CheckboxItem['id']): CheckboxItem => {
  const ctx = useContext(CheckboxCtx);
  return ctx.state.itemMap[id];
};

export const useGraph = () => {
  const ctx = useContext(CheckboxCtx);
  return ctx.state.graph;
};

export const useCheckboxActions = () => {
  const ctx = useContext(CheckboxCtx);
  return ctx.actions;
};
