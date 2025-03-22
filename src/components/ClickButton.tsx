import React from "react";

interface ClickButtonProps {
    onClick: () => void;
}

const ClickButton: React.FC<ClickButtonProps> = ({ onClick }) => {
    return (
        <button className="click-button" onClick={onClick}>
            Code Now!
        </button>
    );
};

export default ClickButton;
