import Upgrade from "./Upgrade";

// Définir le type UpgradesProps
interface UpgradesProps {
    linesOfCode: number;
    autoClickers: number;
    setLinesOfCode: React.Dispatch<React.SetStateAction<number>>;
    setAutoClickers: React.Dispatch<React.SetStateAction<number>>;
}

const Upgrades: React.FC<UpgradesProps> = ({
    linesOfCode,
    autoClickers,
    setLinesOfCode,
    setAutoClickers,
}) => {
    const buyAutoClicker = () => {
        setAutoClickers(autoClickers + 1);
    };

    return (
        <div className="upgrades">
            <h2>Upgrades</h2>

            <Upgrade
                label="Auto Clicker"
                price={10} // Le prix pour acheter un auto-clicker
                unlockPrice={10} // Le prix d’apparition de l’upgrade
                action={buyAutoClicker}
                linesOfCode={linesOfCode}
                setLinesOfCode={setLinesOfCode}
            />

            {/* Tu peux ajouter d'autres upgrades ici */}
            {/* Exemple d'un autre upgrade */}
            {/* <Upgrade
        label="Super Clicker"
        description="Doubles the click speed."
        price={50}
        unlockPrice={50}
        action={someOtherFunction}
        linesOfCode={linesOfCode}
        setLinesOfCode={setLinesOfCode}
      /> */}
        </div>
    );
};

export default Upgrades;
