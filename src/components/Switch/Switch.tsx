import React from "react";
import "./switch.scss"; // Add your styles here

interface SwitchToggleProps {
  isOn: boolean;
  onToggle: () => void;
}

const SwitchToggle: React.FC<SwitchToggleProps> = ({ isOn, onToggle }) => {
  return (
    <button
      className={`switch ${isOn ? "on" : "off"}`}
      onClick={onToggle}
      tabIndex={0}
      aria-pressed={isOn}
    >
      <span className="toggle-handle" />
    </button>
  );
};

export default SwitchToggle;
