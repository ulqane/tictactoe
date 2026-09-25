import Square from './Square';
import { calculateWinner } from '../utils/helpers';

export default function Board({ xIsNext, squares, onPlay, fadingIndex }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        onPlay(i);
    }

    const winner = calculateWinner(squares);

    const thinkingEmojis = ['🧠', '🧮', '🗿', '🧑‍🏫'];
    const currentEmoji = thinkingEmojis[Math.floor(Math.random() * thinkingEmojis.length)];

    let status;
    if (winner) {
        status = '🔥' + 'Winner: ' + winner + '🔥'; // for the record i put these emojis in manually
    } else {
        status = 'Current Player: ' + (xIsNext ? 'X' : 'O') + ' ' + currentEmoji;
    }

    return (
        <>
            <div className="status">{status}</div>
            
            <div className="board-row">
            <Square value={squares[0]} isFading={fadingIndex === 0} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} isFading={fadingIndex === 1} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} isFading={fadingIndex === 2} onSquareClick={() => handleClick(2)} />
            </div>

            <div className="board-row">
            <Square value={squares[3]} isFading={fadingIndex === 3} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} isFading={fadingIndex === 4} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} isFading={fadingIndex === 5} onSquareClick={() => handleClick(5)} />
            </div>

            <div className="board-row">
            <Square value={squares[6]} isFading={fadingIndex === 6} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} isFading={fadingIndex === 7} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} isFading={fadingIndex === 8} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );

}