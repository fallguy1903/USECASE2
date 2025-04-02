export default function GoalSelector({ goal, setGoal }) {
    return (
        <>
            <label>Select the score:</label>
            <select value={goal} onChange={(e) => setGoal(Number(e.target.value))}>
                <option value="">Choose...</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
        </>
    );
}
