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
        <h1>Counter: {counter.value}</h1>
        <button onClick={handleIncrease}>+1</button>
        <button onClick={handleDecrease}>-1</button>
      </div>
    );
};

export default Counter;