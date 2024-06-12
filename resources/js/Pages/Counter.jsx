import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';

const Counter = () => {
    const { counter } = usePage().props;

    const handleIncrease = () => {
      Inertia.post(route('counter.update'), { action: +1 });
    };

    const handleDecrease = () => {
      Inertia.post(route('counter.update'), { action: -1 });
    };

    return (
      <div>
        <h1>Contador: {counter.value}</h1>
        <button onClick={handleIncrease}>+1</button>
        <button onClick={handleDecrease}>-1</button>
        <h2>Ultimos valores:</h2>
            {logs.map(log => (
              <li key={log.id}>
                {log.value} at {new Date(log.created_at).toLocaleString()}
              </li>
            ))}
      </div>
    );
};

export default Counter;