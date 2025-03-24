// App.tsx
import { useState } from "react";
import ClickButton from "./components/ClickButton";
import Header from "./components/Header";
import Upgrades from "./components/Upgrades";
import Stats from "./components/Stats";

const App: React.FC = () => {
  const [linesOfCode, setLinesOfCode] = useState<number>(0);
  const [autoClickers, setAutoClickers] = useState<number>(0);

  useState(() => {
    if (autoClickers > 0) {
      const interval = setInterval(() => {
        setLinesOfCode(prev => prev + autoClickers);
      }, 1000);
      return () => clearInterval(interval);
    }
  },);

  return (
    <div className="app">
      <Header />

      <div className="container">
        <Stats linesOfCode={linesOfCode} autoClickers={autoClickers} />

        <ClickButton onClick={() => setLinesOfCode(linesOfCode + 1)} />

        <Upgrades
          linesOfCode={linesOfCode}
          autoClickers={autoClickers}
          setLinesOfCode={setLinesOfCode}
          setAutoClickers={setAutoClickers}
        />
      </div>
    </div>
  );
};

export default App;
