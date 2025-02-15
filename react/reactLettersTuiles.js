import React, { useState } from "react";

function LetterTiles() {
  const [letters, setLetters] = useState(["A", "B", "C", "D", "E"]);
  const [selectedLetters, setSelectedLetters] = useState([]);


  const selectLetter = (letter) => {
    if (!selectedLetters.includes(letter)) {
      setSelectedLetters([...selectedLetters, letter]);
    }
  };

  
  const removeLetter = (index) => {
    setLetters(letters.filter((_, i) => i !== index));
  };


  const resetSelection = () => {
    setSelectedLetters([]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>React Letter Tiles</h2>

      {/* Liste des lettres sous forme de tuiles */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {letters.map((letter, index) => (
          <div
            key={index}
            onClick={() => selectLetter(letter)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              backgroundColor: "lightblue",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {letter}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeLetter(index);
              }}
              style={{
                marginLeft: "5px",
                background: "red",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Liste des lettres sélectionnées */}
      <h3>Selected Letters: {selectedLetters.join(", ")}</h3>

      {/* Bouton de réinitialisation */}
      <button onClick={resetSelection} style={{ marginTop: "10px" }}>
        Reset Selection
      </button>
    </div>
  );
}

export default LetterTiles;
