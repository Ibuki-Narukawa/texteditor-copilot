import React from 'react';
import TextEditor from './components/TextEditor';
import Copilot from './components/Copilot';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">TextEditor Copilot</h1>
      </header>
      <div className="flex flex-1">
        <TextEditor />
        <Copilot />
      </div>
    </div>
  );
}

export default App;
