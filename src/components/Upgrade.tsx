import React, { useEffect } from "react";
import './Upgrade.css'

interface UpgradeProps {
    label: string;
    price: number;
    unlockPrice: number;
    action: () => void;
    linesOfCode: number;
    setLinesOfCode: React.Dispatch<React.SetStateAction<number>>;
}

const Upgrade: React.FC<UpgradeProps> = ({
    label,
    price,
    unlockPrice,
    action,
    linesOfCode,
    setLinesOfCode,
}) => {
    const isUnlocked = linesOfCode >= unlockPrice;

    useEffect(() => {
        if (isUnlocked) {
            console.log(`Upgrade ${label} débloqué !`);
        }
    }, [isUnlocked, label]);

    const handleUpgrade = () => {
        if (linesOfCode >= price) {
            action();
            setLinesOfCode(linesOfCode - price);
        }
    };

    return (
        isUnlocked && (
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
