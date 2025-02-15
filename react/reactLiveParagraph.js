import React, { useState } from "react";

function LiveParagraph() {
  const [text, setText] = useState("Tapez ici pour voir le texte en direct...");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>React Live Paragraph</h2>

      {/* Zone de saisie */}
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Écrivez ici..."
        style={{
          width: "80%",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      ></textarea>

      {/* Paragraphe mis à jour en direct */}
      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
          fontWeight: "bold",
          backgroundColor: "#f3f3f3",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default LiveParagraph;
