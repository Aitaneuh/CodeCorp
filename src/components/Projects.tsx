interface ProjectsProps {
    availableLinesOfCode: number;
    completeProject: (cost: number, reward: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ availableLinesOfCode, completeProject }) => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <p>Use your lines of code to deliver projects and earn money!</p>

            <button onClick={() => completeProject(100, 50)} disabled={availableLinesOfCode < 100}>
                Deliver Small Project (-100 lines, +50$)
            </button>

            <button onClick={() => completeProject(500, 300)} disabled={availableLinesOfCode < 500}>
                Deliver Medium Project (-500 lines, +300$)
            </button>

            <button onClick={() => completeProject(2000, 1500)} disabled={availableLinesOfCode < 2000}>
                Deliver Large Project (-2000 lines, +1500$)
            </button>
        </div>
    );
};

export default Projects;
