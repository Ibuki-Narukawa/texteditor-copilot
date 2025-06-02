export type Suggestion = { id: number; text: string };

const CopilotPanel = ({ suggestions }: { suggestions: Suggestion[] }) => {
  return (
    <div className="w-64 border-l border-gray-200 p-2 overflow-y-auto">
      <h2 className="font-bold mb-2">Suggestions</h2>
      {suggestions.map((s) => (
        <div
          key={s.id}
          className="mb-1 p-1 cursor-pointer hover:bg-gray-100 rounded"
        >
          {s.text}
        </div>
      ))}
    </div>
  );
};

export default CopilotPanel;
