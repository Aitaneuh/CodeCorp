import { useState, useEffect } from "react";
import ClickButton from "./components/ClickButton";
import Header from "./components/Header";
import Upgrades from "./components/Upgrades";
import Stats from "./components/Stats";

const LOCAL_STORAGE_KEY = "codecorp_game_data";

const App: React.FC = () => {
  const [linesOfCode, setLinesOfCode] = useState<number>(0);
  const [autoClickers, setAutoClickers] = useState<number>(0);
  const [autoClickerPrice, setAutoClickerPrice] = useState<number>(10);
  const [language, setLanguage] = useState<string>("Python");
  const [intervalTime, setIntervalTime] = useState<number>(1000);

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const { savedLines, savedAutoClickers, savedLanguage } = JSON.parse(savedData);
      setLinesOfCode(savedLines);
      setAutoClickers(savedAutoClickers);
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const dataToSave = {
      savedLines: linesOfCode,
      savedAutoClickers: autoClickers,
      savedLanguage: language,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
  }, [linesOfCode, autoClickers, language]);

  useEffect(() => {
    if (autoClickers > 0) {
      const interval = setInterval(() => {
        setLinesOfCode(prev => prev + autoClickers);
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [autoClickers, intervalTime]);

  const buyAutoClicker = () => {
    if (linesOfCode >= autoClickerPrice) {
      setAutoClickers(prev => prev + 1);
      setLinesOfCode(prev => prev - autoClickerPrice);
      setAutoClickerPrice(prev => Math.floor(prev * 1.5));
    }
  };

  const switchLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);

    if (newLanguage === "Ruby") {
      setIntervalTime(500);
    } else if (newLanguage === "PHP") {
      setIntervalTime(333);
    } else if (newLanguage === "Dart") {
      setIntervalTime(250);
    } else if (newLanguage === "Java") {
      setIntervalTime(125);
    } else if (newLanguage === "C++") {
      setIntervalTime(75);
    } else if (newLanguage === "C") {
      setIntervalTime(40);
    } else if (newLanguage === "Assembly") {
      setIntervalTime(10);
    } else {
      setIntervalTime(1000);
    }
  };

  // Fonction de reset
  const resetGame = () => {
    setLinesOfCode(0);
    setAutoClickers(0);
    setAutoClickerPrice(10);
    setLanguage("JavaScript");
    setIntervalTime(1000);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <div className="app">
      <Header />

      <div className="container">
        <Stats
          linesOfCode={linesOfCode}
          autoClickers={autoClickers}
          language={language}
          resetGame={resetGame}
        />

        <ClickButton onClick={() => setLinesOfCode(prev => prev + 1)} />

        <Upgrades
          linesOfCode={linesOfCode}
          autoClickers={autoClickers}
          setLinesOfCode={setLinesOfCode}
          setAutoClickers={setAutoClickers}
          setLanguage={switchLanguage}
          autoClickerPrice={autoClickerPrice}
          buyAutoClicker={buyAutoClicker}
        />
      </div>
    </div>
  );
};

export default App;
