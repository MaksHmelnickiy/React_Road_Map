import React from 'react';
import './App.css';
import { MyUseState } from './LearnReact/React_hooks/useState/useState';
import { MyUseStateWithObject } from './LearnReact/React_hooks/useState/useStateWithObj';
import { MyUseEffect } from './LearnReact/React_hooks/useEffect/useEffect';
import { MyTaskUseEffect } from './LearnReact/React_hooks/useEffect/TASKS';
import { MyUseContextParent } from './LearnReact/React_hooks/useContext/useContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <MyUseState /> */}
        <hr />
        {/* <MyUseStateWithObject /> */}
        <hr />
        {/* <MyUseEffect /> */}
        {/* <MyTaskUseEffect /> */}
        <hr />
        <MyUseContextParent />
      </header>
    </div>
  );
}

export default App;
