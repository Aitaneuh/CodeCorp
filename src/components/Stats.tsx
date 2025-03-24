import React from "react";

interface StatsProps {
    linesOfCode: number;
    autoClickers: number;
}

const Stats: React.FC<StatsProps> = ({ linesOfCode, autoClickers }) => {
    return (
        <div className="stats">
            <h2>Stats</h2>
            <p>Lines of Code: {linesOfCode}</p>
            <p>Auto-Clickers: {autoClickers}</p>
        </div>
    );
};

export default Stats;
