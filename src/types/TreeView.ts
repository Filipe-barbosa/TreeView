export interface DataInterface {
  id: string;
  label: string;
  status: CheckBoxStatus;
  loading?: boolean;
  children: DataInterface[];
}
export interface CheckboxItem {
  id: string;
  label: string;
  loading?: boolean;
  status: CheckBoxStatus;
}
export type CheckBoxStatus = 'checked' | 'partial' | 'none';

export interface CheckboxNode {
  id: CheckboxItem['id'];
  children: CheckboxNode[];
  parent?: CheckboxNode;
}

export interface State {
  itemMap: Record<string, CheckboxItem>;
  graph: CheckboxNode[];
}

export interface CheckAction {
  type: 'check-item';
  payload: {
    id: CheckboxItem['id'];
    node: CheckboxNode;
  };
}
