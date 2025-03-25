import React, { useEffect, useCallback } from "react";
import './Upgrade.css'

interface UpgradeProps {
    label: string;
    price: number;
    unlockPrice: number;
    action: () => void;
    linesOfCode: number;
    setLinesOfCode: React.Dispatch<React.SetStateAction<number>>;
    repetable: boolean;
    purchasedUpgrades: string[];
}

const Upgrade: React.FC<UpgradeProps> = ({
    label,
    price,
    unlockPrice,
    action,
    linesOfCode,
    setLinesOfCode,
    repetable,
    purchasedUpgrades
}) => {
    const isUnlocked = linesOfCode >= unlockPrice;
    const isPurchased = purchasedUpgrades.includes(label) && !repetable;

    useEffect(() => {
        if (isUnlocked) {

        }
    }, [isUnlocked, label]);

    const handleUpgrade = useCallback(() => {
        if (linesOfCode >= price && (!isPurchased || repetable)) {
            setLinesOfCode(prev => prev - price);
            action();
        }
    }, [linesOfCode, price, action, setLinesOfCode, isPurchased, repetable]);

    return (
        isUnlocked && !isPurchased && (
            <div className="upgrade">
                <button onClick={handleUpgrade}>
                    {label}
                    <span className="price"> {price} </span>
                </button>
            </div>
        )
    );
};

export default Upgrade;
