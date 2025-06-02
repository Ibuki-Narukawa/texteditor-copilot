import React from 'react';

function TextEditor() {
  return (
    <div className="flex-1 p-4 border-r border-gray-300">
      <textarea
        className="w-full h-full p-2 border rounded"
        placeholder="Write your code here..."
      />
    </div>
  );
}

export default TextEditor;
