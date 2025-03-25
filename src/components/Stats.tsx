interface StatsProps {
    linesOfCode: number;
    autoClickers: number;
    language: string;
    resetGame: () => void;
}

const Stats: React.FC<StatsProps> = ({ linesOfCode, autoClickers, language, resetGame }) => {
    return (
        <div className="stats">
            <h2>Stats</h2>
            <p>Lines of Code Written: {linesOfCode}</p>
            <p>Lines of Code Available: {linesOfCode}</p>
            <p>Money: {linesOfCode}$</p>
            <p>Auto Clickers: {autoClickers}</p>
            <p>Current Language: {language}</p>
            <br />
            <button onClick={resetGame} className="reset-button">Reset Game</button>
        </div>
    );
};

export default Stats;
