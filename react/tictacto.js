import React, { useState } from "react";

// Composant de la grille
const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

// Fonction pour vérifier le gagnant
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // lignes verticales
    [0, 4, 8], [2, 4, 6], // diagonales
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    if (board[i] || winner) return;

    const newBoard = board.slice();
    newBoard[i] = currentPlayer;
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const renderSquare = (i) => (
    <Square value={board[i]} onClick={() => handleClick(i)} />
  );

  return (
    <div className="game">
      <div className="board">
        {Array(3).fill(null).map((_, row) =>
          <div key={row} className="board-row">
            {Array(3).fill(null).map((_, col) =>
              renderSquare(row * 3 + col)
            )}
          </div>
        )}
      </div>
      {winner ? <div className="status">{`Player ${winner} wins!`}</div> : <div className="status">{`Next player: ${currentPlayer}`}</div>}
    </div>
  );
};

export default TicTacToe;
