import Upgrade from "./Upgrade";
import { useState, useCallback } from "react";

// Définir le type UpgradesProps
interface UpgradesProps {
    linesOfCode: number;
    autoClickers: number;
    setLinesOfCode: React.Dispatch<React.SetStateAction<number>>;
    setAutoClickers: React.Dispatch<React.SetStateAction<number>>;
    setLanguage: (language: string) => void;
    autoClickerPrice: number;
    buyAutoClicker: () => void;
}

const Upgrades: React.FC<UpgradesProps> = ({
    linesOfCode,
    setLinesOfCode,
    setAutoClickers,
    setLanguage
}) => {
    const [purchasedUpgrades] = useState<string[]>([]);

    const buyAutoClicker = useCallback(() => {
        setAutoClickers(prev => prev + 1);
    }, [setAutoClickers]);

    const upgradesList = [
        {
            label: "while (true) loop",
            price: 10,
            unlockPrice: 10,
            action: buyAutoClicker,
            repetable: true
        },
        {
            label: "Switch to Ruby",
            price: 1000,
            unlockPrice: 1000,
            action: () => setLanguage("Ruby"),
            repetable: false
        },
        {
            label: "Switch to PHP",
            price: 50000,
            unlockPrice: 50000,
            action: () => setLanguage("PHP"),
            repetable: false
        },
        {
            label: "Switch to Dart",
            price: 2500000,
            unlockPrice: 2500000,
            action: () => setLanguage("Dart"),
            repetable: false
        },
        {
            label: "Switch to Java",
            price: 10000000,
            unlockPrice: 10000000,
            action: () => setLanguage("Java"),
            repetable: false
        },
        {
            label: "Switch to C++",
            price: 250000000,
            unlockPrice: 250000000,
            action: () => setLanguage("C++"),
            repetable: false
        },
        {
            label: "Switch to C",
            price: 1000000000,
            unlockPrice: 1000000000,
            action: () => setLanguage("C"),
            repetable: false
        },
        {
            label: "Switch to Assembly (God Tier)",
            price: 100000000000,
            unlockPrice: 100000000000,
            action: () => setLanguage("Assembly"),
            repetable: false
        }
    ];

    return (
        <div className="upgrades">
            <h2>Upgrades</h2>
            {upgradesList.map((upgrade, index) => (
                <Upgrade
                    key={index}
                    label={upgrade.label}
                    price={upgrade.price}
                    unlockPrice={upgrade.unlockPrice}
                    action={upgrade.action}
                    linesOfCode={linesOfCode}
                    setLinesOfCode={setLinesOfCode}
                    repetable={upgrade.repetable}
                    purchasedUpgrades={purchasedUpgrades}
                />
            ))}
        </div>
    );
};

export default Upgrades;
