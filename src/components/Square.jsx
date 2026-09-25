export default function Square({ value, isFading, onSquareClick }) {
    return (
        <button className={`square ${isFading ? 'fading' : ''}`} onClick={onSquareClick}>
        {value}
        </button>
    );
}