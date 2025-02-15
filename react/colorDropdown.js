import React, { useState } from "react";

function ColorDropdown() {
  const colors = [
    { name: "Red", code: "#FF0000" },
    { name: "Green", code: "#008000" },
    { name: "Blue", code: "#0000FF" },
    { name: "Yellow", code: "#FFFF00" },
    { name: "Purple", code: "#800080" }
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0].code);

  const handleChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>React Color Dropdown</h2>

      {/* Sélecteur de couleur */}
      <select onChange={handleChange} value={selectedColor}>
        {colors.map((color, index) => (
          <option key={index} value={color.code}>
            {color.name}
          </option>
        ))}
      </select>

      {/* Affichage de la couleur sélectionnée */}
      <div
        style={{
          marginTop: "20px",
          width: "200px",
          height: "100px",
          backgroundColor: selectedColor,
          border: "2px solid black",
          borderRadius: "5px"
        }}
      ></div>

      <p style={{ fontWeight: "bold" }}>Selected Color: {selectedColor}</p>
    </div>
  );
}

export default ColorDropdown;
