import '@/styles/checkbox.sass';
import TreeView from '@/components/TreeView';
import { type DataInterface } from '@/types/TreeView';

const mock: DataInterface[] = [
  {
    id: '1',
    label: 'Root First Item',
    checked: false,
    children: [
      {
        id: '1',
        label: 'First Children',
        checked: false,
        children: [
          {
            id: '1',
            label: 'First GrandChildren',
            checked: false,
            children: [],
          },
        ],
      },
      { id: '1', label: 'Second Children', checked: false, children: [] },
    ],
  },
  {
    id: '1',
    label: 'Root Second Item',
    checked: false,
    children: [],
  },
];

function App() {
  return <TreeView data={mock} />;
}

export default App;
