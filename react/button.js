import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button 
      id="toggle-button" 
      className="toggle-button" 
      onClick={() => setIsOn(!isOn)}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default ToggleButton;