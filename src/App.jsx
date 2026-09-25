import { useState } from 'react';
import Board from './components/Board';
import './App.css';

export default function Game() {
	const [xMoves, setXMoves] = useState([]);
	const [oMoves, setOMoves] = useState([]);
	const [xIsNext, setXIsNext] = useState(true);

	const squares = Array(9).fill(null);
	xMoves.forEach((idx) => (squares[idx] = 'X'));
	oMoves.forEach((idx) => (squares[idx] = 'O'));

	const fadingIndex = xIsNext
		? (xMoves.length === 3 ? xMoves[0] : null)
		: (oMoves.length === 3 ? oMoves[0] : null);

function handlePlay(i) {
		if (xIsNext) {
			let updatedXMoves = [...xMoves, i];
			if (updatedXMoves.length > 3) {
				updatedXMoves.shift();
			}
			setXMoves(updatedXMoves);
		} else {
			let updatedOMoves = [...oMoves, i];
			if (updatedOMoves.length > 3) {
				updatedOMoves.shift();
			}
			setOMoves(updatedOMoves);
		}
		setXIsNext(!xIsNext);
	}

	function handleRestart() {
		setXMoves([]);
		setOMoves([]);
		setXIsNext(true);
	}

	return (
		<div className="game">
			<div className="game-board">
				<Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} fadingIndex={fadingIndex} />
			</div>
			<button className = "restart-button" onClick={handleRestart}>
				Restart Game
			</button>
		</div>
	);
}