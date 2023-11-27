import { type DataInterface } from '@/types/TreeView';

 export const mock: DataInterface[] = [
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