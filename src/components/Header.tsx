import React from "react";
import { FaGithub } from "react-icons/fa";

const Header: React.FC = () => {

    return (
        <header className="header">
            <a href="https://github.com/Aitaneuh/codecorp" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub className="github-icon" /> CodeCorp 
            </a>
            <h1 className="title">CodeCorp</h1>
            <a href="https://github.com/Aitaneuh" target="_blank" rel="noopener noreferrer" className="github-link">
                Aitaneuh <FaGithub className="github-icon" />
            </a>
        </header>
    );
};

export default Header;
