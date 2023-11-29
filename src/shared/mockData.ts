import { type DataInterface } from '@/types/TreeView';

export const defaultData: DataInterface[] = [
  {
    id: '1',
    label: 'Root First Item',
    checked: false,
    children: [
      {
        id: '2',
        label: 'First Children',
        checked: false,
        children: [
          {
            id: '3',
            label: 'First GrandChildren',
            checked: false,
            children: [],
          },
        ],
      },
      { id: '4', label: 'Second Children', checked: false, children: [] },
    ],
  },
  {
    id: '5',
    label: 'Root Second Item',
    checked: false,
    children: [],
  },
];

export const labelData: DataInterface[] = [
  {
    id: '1',
    label: '<h2>Root First Item</h2>',
    checked: true,
    children: [
      {
        id: '2',
        label: '<h3>First Children</h3>',
        checked: false,
        children: [
          {
            id: '3',
            label: '<p>First GrandChildren</p>',
            checked: false,
            children: [],
          },
        ],
      },
      { id: '4', label: 'Second Children', checked: false, children: [] },
    ],
  },
];
