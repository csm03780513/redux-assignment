import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Redux Counter App</h2>
        <Counter />
      </div>
  );
};

export default App;