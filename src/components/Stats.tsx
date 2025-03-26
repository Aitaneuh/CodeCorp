interface StatsProps {
    totalLinesOfCode: number;
    availableLinesOfCode: number;
    money: number;
    autoClickers: number;
    language: string;
    resetGame: () => void;
}

const Stats: React.FC<StatsProps> = ({ totalLinesOfCode, availableLinesOfCode, money, autoClickers, language, resetGame }) => {
    return (
        <div className="stats">
            <h2>Stats</h2>
            <p>Total Lines of Code Written: {totalLinesOfCode}</p>
            <p>Lines of Code Available: {availableLinesOfCode}</p>
            <p>Money: {money}$</p>
            <p>Auto Clickers: {autoClickers}</p>
            <p>Current Language: {language}</p>
            <br />
            <button onClick={resetGame} className="reset-button">Reset Game</button>
        </div>
    );
};

export default Stats;
