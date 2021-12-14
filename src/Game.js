import {React,} from 'react'
import './App.css';
import Board from './Board';
import Players from './Players';

const Game = () => {

    // const [squares, setSquares] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);
    // const [history, setHistory] = useState([{squares: Array(9).fill(null),} ], xIsNext: true);

    return (
            <div className="game"> 
                <div className="game-board">
                <h1>Let's play Tic Tac Toe</h1>
                <Players />
                    <Board />
                </div>
                
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}

export default Game
