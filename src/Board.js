import React from 'react'
import './App.css';
import Square from './Square'


const Board = () => {

    const [squares, setSquares] = React.useState(Array(9).fill(null));

    function handleClick(i) {
        let nextSquares = squares.slice();
        nextSquares[i] = 'X'
        setSquares(nextSquares)
    };

    function renderSquare(i) {
        return <Square 
                value={squares[i]}
                onClick={() => handleClick(i)}/>;
    };

    //const status = 'Next player: X';

    return (
        <div>
            <div className="status"></div>
            <div className="board-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
            <div className="board-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
            <div className="board-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
        </div>
    );
};

export default Board
