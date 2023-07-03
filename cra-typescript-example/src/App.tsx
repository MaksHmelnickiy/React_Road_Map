import React from 'react';
import './App.css';
import { MyUseState } from './LearnReact/React_hooks/useState/useState';
import { MyUseStateWithObject } from './LearnReact/React_hooks/useState/useStateWithObj';
import { MyUseEffect } from './LearnReact/React_hooks/useEffect/useEffect';
import { MyTaskUseEffect } from './LearnReact/React_hooks/useEffect/TASKS';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyUseState /> */}
        <hr />
        {/* <MyUseStateWithObject /> */}
        <hr />
        {/* <MyUseEffect /> */}
        <MyTaskUseEffect />
      </header>
    </div>
  );
}

export default App;
