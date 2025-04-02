export default function ScoreButtons({ handleClick1, handleClick2, reset, winner, goal }) {
    return (
        <>
            <button onClick={handleClick1} disabled={winner || !goal}>+1 Player 1</button>
            <button onClick={handleClick2} disabled={winner || !goal}>+1 Player 2</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}
