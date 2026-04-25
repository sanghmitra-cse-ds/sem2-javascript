// Import useState hook from React
const { useState } = React;

// Counter App Component using useState Hook
function App() {
    // State variable: counter value
    const [count, setCount] = useState(0);

    // State variable: operation history
    const [history, setHistory] = useState([]);

    // Increment handler
    function handleIncrement() {
        const newVal = count + 1;
        setCount(newVal);
        setHistory(prev => [`Incremented → ${newVal}`, ...prev.slice(0, 4)]);
    }

    // Decrement handler
    function handleDecrement() {
        const newVal = count - 1;
        setCount(newVal);
        setHistory(prev => [`Decremented → ${newVal}`, ...prev.slice(0, 4)]);
    }

    // Reset handler
    function handleReset() {
        setCount(0);
        setHistory(prev => [`Reset → 0`, ...prev.slice(0, 4)]);
    }

    // Determine color class based on count value
    const colorClass = count > 0 ? "positive" : count < 0 ? "negative" : "zero";

    return (
        <div className="app-container">
            <h1 className="app-title">React Counter Application</h1>
            <p className="app-subtitle">
                Name: Sanghmitra Shakya &nbsp;|&nbsp; Admission No: 2025B15410312
            </p>

            <p className="counter-label">Current Count</p>
            {/* Counter display — updates automatically when state changes */}
            <div className={`counter-display ${colorClass}`}>{count}</div>

            {/* Increment and Decrement buttons */}
            <div className="btn-row">
                <button className="btn-increment" onClick={handleIncrement}>
                    Increment (+)
                </button>
                <button className="btn-decrement" onClick={handleDecrement}>
                    Decrement (-)
                </button>
            </div>

            {/* Reset button */}
            <div className="btn-row">
                <button className="btn-reset" onClick={handleReset}>
                    Reset
                </button>
            </div>

            {/* Operation history */}
            {history.length > 0 && (
                <div className="history-section">
                    <div className="history-title">Recent Operations:</div>
                    {history.map((item, index) => (
                        <div key={index} className="history-item">{item}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

// Render App component into DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
