import Editor from './components/Editor';
import CopilotPanel from './components/CopilotPanel';
import { useState } from 'react';

function App() {
  const [suggestions] = useState([
    { id: 1, text: 'Example suggestion 1' },
    { id: 2, text: 'Example suggestion 2' },
  ]);

  return (
    <div className="relative h-full flex">
      <div className="flex-1">
        <Editor />
      </div>
      <CopilotPanel suggestions={suggestions} />
    </div>
  );
}

export default App;
