import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    const handleReset = () => {
        setCount(0);
    };

    const message = count % 2 === 0 ? 'El valor es par' : 'El valor es impar';

    return (
        <div>
            <h2>Contador: {count}</h2>
            <p>{message}</p>
            <button onClick={handleIncrement}>Incrementar</button>
            <button onClick={handleDecrement}>Decrementar</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Counter;
