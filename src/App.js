import React from 'react';
import CountProvider from './context/Count';
import Counter from './components/Counter';
import CounterMirror from './components/CounterMirror';

const App = () => {
  return (
    <CountProvider>
      <div>
        <Counter/>
        <hr />
        <CounterMirror/>
      </div>
    </CountProvider>
  );
}

export default App;
