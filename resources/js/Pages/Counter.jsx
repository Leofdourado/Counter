import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';

const Counter = () => {
  const { props } = usePage(); //Obtem props
  const { counter, logs } = props; // Destrutura props
  const [currentCounter, setCurrentCounter] = useState(counter.value); //Estado counter
  const [currentLogs, setCurrentLogs] = useState(logs); //Estado Logs

  //Func aumentar
  const handleIncrement = () => {
    Inertia.post('/counter', { action: 'increment' }, {
      onSuccess: () => {
        setCurrentCounter(currentCounter + 1);
        setCurrentLogs([...currentLogs, { value: currentCounter + 1, created_at: new Date() }]);
      }
    });
  };

  //Func diminuir
  const handleDecrement = () => {
    Inertia.post('/counter', { action: 'decrement' }, {
      onSuccess: () => {
        setCurrentCounter(currentCounter - 1);
        setCurrentLogs([...currentLogs, { value: currentCounter - 1, created_at: new Date() }]);
      }
    });
  };

  //pagina
  return (
    <div>
      <div>
        <h1>Contador: {currentCounter}</h1>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>
      <div>
        <h2>Ultimos valores:</h2>
        <ul>
          {currentLogs.map((log, index) => ( //Criar lista log
            <li key={index}>{log.value} at {new Date(log.created_at).toLocaleString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.shape({
    value: PropTypes.number.isRequired,
  }).isRequired,
  logs: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
  })).isRequired,
};

export default Counter;
