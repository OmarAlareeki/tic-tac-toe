import React from 'react'
import './App.css';
import Square from './Square';
import Restart from './Restart';
import {GrNext} from 'react-icons/gr'
const Board = () => {

    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = React.useState(true);

    function renderRestartButton() {
        return (
          <Restart
            onClick={() => {
              setSquares(Array(9).fill(null));
              setXIsNext(true);
            }}
          />
        );
      }

    function handleClick(i) {
        let nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(nextSquares)
        setXIsNext(!xIsNext)
    };

    function renderSquare(i) {
        return <Square 
                value={squares[i]}
                onClick={() => handleClick(i)} />;
    };

    const winner = calculateWinner(squares);
    let status;

    if(winner) {
        status = winner + ' is winner!';
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className='container'>
            <h1 className="status"><GrNext /> {status}</h1>
            <div className="board-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
            <div className="board-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
            <div className="board-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
            <div className="restart-button">{renderRestartButton()}</div>
        </div>
    );
};

export default Board

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }