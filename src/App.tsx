import '@/styles/checkbox.sass';
import TreeView from '@/components/TreeView';
import { CheckboxProvider } from '@/hooks/tree-view';
import { defaultData } from '@/shared/mockData';

function App() {
  return (
    <CheckboxProvider inputData={defaultData}>
      <TreeView />
    </CheckboxProvider>
  );
}

export default App;
