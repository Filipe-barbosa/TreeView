import { raise } from '@/shared/exceptions';
import { type DataInterface } from '@/types/TreeView';
import { createContext, useContext, useReducer } from 'react';

export interface CheckboxItem {
  id: string;
  label: string;
  checked: boolean;
}

export interface CheckboxNode {
  id: CheckboxItem['id'];
  children: CheckboxNode[];
  parent?: CheckboxNode['id'];
}

interface State {
  itemMap: Record<string, CheckboxItem>;
  graph: CheckboxNode[];
}

interface CheckAction {
  type: 'check-item';
  payload: {
    id: CheckboxItem['id'];
  };
}

type Action = CheckAction;

const reducer = (
  state: State = { itemMap: {}, graph: [] },
  action: Action | null,
): State => {
  switch (action?.type) {
    case 'check-item':
      const { id, checked, label } = state.itemMap[action.payload.id];
      return {
        ...state,
        itemMap: {
          ...state.itemMap,
          [id]: {
            id,
            label,
            checked: !checked,
          },
        },
      };

    default:
      return state;
  }
};

const initialState = reducer(undefined, null);
const CheckboxCtx = createContext<{
  state: State;
  actions: {
    checkItem: (id: string) => void;
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
  parent?: string,
): CheckboxNode {
  if (state.itemMap[input.id] != null) raise('cycle found');

  // add item to map
  state.itemMap = {
    ...state.itemMap,
    [input.id]: {
      checked: input.checked,
      id: input.id,
      label: input.label,
    },
  };

  return {
    parent,
    id: input.id,
    children: input.children.map((child) =>
      makeRecursiveGraph(child, state, input.id),
    ),
  };
}

function dataInterfaceToCheckbox(
  input: DataInterface[],
  parent?: string,
): State {
  const initialState: State = {
    graph: [],
    itemMap: {},
  };

  initialState.graph = input.map((data) =>
    makeRecursiveGraph(data, initialState, parent),
  );

  return initialState;
}

export function CheckboxProvider(props: Props) {
  const [state, dispatch] = useReducer(
    reducer,
    dataInterfaceToCheckbox(props.inputData),
  );

  console.log(state);

  const actions = {
    checkItem(id: CheckboxItem['id']) {
      dispatch({
        type: 'check-item',
        payload: { id },
      });
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
