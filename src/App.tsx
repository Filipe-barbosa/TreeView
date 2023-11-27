import '@/styles/checkbox.sass';
import TreeView from '@/components/TreeView';
import { CheckboxProvider } from '@/hooks/tree-view';
import { mock } from '@/shared/mockData';

function App() {
  return (
    <CheckboxProvider inputData={mock}>
      <TreeView />
    </CheckboxProvider>
  );
}

export default App;
