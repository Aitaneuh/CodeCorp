import { useState, useEffect } from "react";
import ClickButton from "./components/ClickButton";
import Header from "./components/Header";
import Upgrades from "./components/Upgrades";
import Stats from "./components/Stats";
import Projects from "./components/Projects";

const LOCAL_STORAGE_KEY = "codecorp_game_data";

const App: React.FC = () => {
  const [totalLinesOfCode, setTotalLinesOfCode] = useState<number>(0);
  const [availableLinesOfCode, setAvailableLinesOfCode] = useState<number>(0);
  const [money, setMoney] = useState<number>(0);
  const [autoClickers, setAutoClickers] = useState<number>(0);
  const [autoClickerPrice, setAutoClickerPrice] = useState<number>(10);
  const [language, setLanguage] = useState<string>("Python");
  const [multiplier, setMultiplier] = useState<number>(1);

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const { savedTotalLines, savedAvailableLines, savedMoney, savedAutoClickers, savedAutoClickerPrice, savedLanguage, savedMultiplier } = JSON.parse(savedData);
      setTotalLinesOfCode(savedTotalLines);
      setAvailableLinesOfCode(savedAvailableLines);
      setMoney(savedMoney);
      setAutoClickers(savedAutoClickers);
      setAutoClickerPrice(savedAutoClickerPrice);
      setLanguage(savedLanguage);
      setMultiplier(savedMultiplier);
    }
  }, []);

  useEffect(() => {
    const dataToSave = {
      savedTotalLines: totalLinesOfCode,
      savedAvailableLines: availableLinesOfCode,
      savedMoney: money,
      savedAutoClickers: autoClickers,
      savedAutoClickerPrice: autoClickerPrice,
      savedLanguage: language,
      savedMultiplier: multiplier,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
  }, [totalLinesOfCode, availableLinesOfCode, money, autoClickers, autoClickerPrice, language, multiplier]);

  useEffect(() => {
    if (autoClickers > 0) {
      const interval = setInterval(() => {
        const linesPerSecond = autoClickers * multiplier;
        const linesPerTick = linesPerSecond / 50;

        setTotalLinesOfCode(prev => prev + linesPerTick);
        setAvailableLinesOfCode(prev => prev + linesPerTick);
      }, 20);

      return () => clearInterval(interval);
    }
  }, [autoClickers, multiplier]);

  const clickHandler = () => {
    setTotalLinesOfCode(prev => prev + 1);
    setAvailableLinesOfCode(prev => prev + 1);
  };

  const buyAutoClicker = () => {
    if (availableLinesOfCode >= autoClickerPrice) {
      setAutoClickers(prev => prev + 1);
      setAvailableLinesOfCode(prev => prev - autoClickerPrice);
      setAutoClickerPrice(prev => prev * 1.5);
    }
  };

  const completeProject = (cost: number, reward: number) => {
    if (availableLinesOfCode >= cost) {
      setAvailableLinesOfCode(prev => prev - cost);
      setMoney(prev => prev + reward);
    }
  };

  const switchLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);

    let newMultiplier = 1;
    if (newLanguage === "Ruby") newMultiplier = 2;
    if (newLanguage === "PHP") newMultiplier = 3;
    if (newLanguage === "Dart") newMultiplier = 4;
    if (newLanguage === "Java") newMultiplier = 5;
    if (newLanguage === "C++") newMultiplier = 6;
    if (newLanguage === "C") newMultiplier = 7;
    if (newLanguage === "Assembly") newMultiplier = 8;

    setMultiplier(newMultiplier);
  };

  const resetGame = () => {
    setTotalLinesOfCode(0);
    setAvailableLinesOfCode(0);
    setMoney(0);
    setAutoClickers(0);
    setAutoClickerPrice(10);
    setLanguage("Python");
    setMultiplier(1);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return (
    <div className="app">
      <Header />

      <div className="container">
        <div className="top-section">
          <Stats
            totalLinesOfCode={totalLinesOfCode}
            availableLinesOfCode={availableLinesOfCode}
            money={money}
            autoClickers={autoClickers}
            language={language}
            resetGame={resetGame}
          />
          <div className="centerX">
            <ClickButton onClick={clickHandler} />
          </div>
          <Upgrades
            linesOfCode={availableLinesOfCode}
            autoClickers={autoClickers}
            setLinesOfCode={setAvailableLinesOfCode}
            setAutoClickers={setAutoClickers}
            setLanguage={switchLanguage}
            autoClickerPrice={autoClickerPrice}
            buyAutoClicker={buyAutoClicker}
          />
        </div>
        <Projects availableLinesOfCode={availableLinesOfCode} completeProject={completeProject} />
      </div>
    </div>
  );
};

export default App;
