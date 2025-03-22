import { useState } from "react";
import ClickButton from "./components/ClickButton";
import Header from "./components/Header";

const App: React.FC = () => {
  const [linesOfCode, setLinesOfCode] = useState<number>(0);

  return (
    <div className="app">
      <Header /> { }
      <div className="content">
        <p>Lines of Code: {linesOfCode}</p>
        <ClickButton onClick={() => setLinesOfCode(linesOfCode + 1)} />
      </div>
    </div>
  );
};

export default App;
