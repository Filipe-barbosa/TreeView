import { type DataInterface } from '@/types/TreeView';

export const defaultData: DataInterface[] = [
  {
    id: '1',
    label: 'Root First Item',
    status: 'none',
    children: [
      {
        id: '2',
        label: 'First Children',
        status: 'none',
        children: [
          {
            id: '3',
            label: 'First GrandChildren',
            status: 'none',
            children: [],
          },
        ],
      },
      { id: '4', label: 'Second Children', status: 'none', children: [] },
    ],
  },
  {
    id: '5',
    label: 'Root Second Item',
    status: 'none',
    children: [],
  },
];

export const labelData: DataInterface[] = [
  {
    id: '1',
    label: '<h2>Root First Item</h2>',
    status: 'none',
    children: [
      {
        id: '2',
        label: '<h3>First Children</h3>',
        status: 'none',
        children: [
          {
            id: '3',
            label: '<p>First GrandChildren</p>',
            status: 'none',
            children: [],
          },
        ],
      },
      { id: '4', label: 'Second Children', status: 'none', children: [] },
    ],
  },
];

export const loadingData: DataInterface[] = [
  {
    id: '1',
    label: 'Root First Item',
    status: 'none',
    children: [
      {
        id: '2',
        label: 'First Children',
        status: 'none',
        children: [
          {
            id: '3',
            label: 'First GrandChildren',
            status: 'none',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: '5',
    label: 'Root Second Item',
    status: 'none',
    loading: true,
    children: [],
  },
];
