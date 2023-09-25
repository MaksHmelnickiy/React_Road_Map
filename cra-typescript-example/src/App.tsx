import React from 'react';
import './App.css';
import { MyUseState } from './LearnReact/React_hooks/useState/useState';
import { MyUseStateWithObject } from './LearnReact/React_hooks/useState/useStateWithObj';
import { MyUseEffect } from './LearnReact/React_hooks/useEffect/useEffect';
import { MyTaskUseEffect } from './LearnReact/React_hooks/useEffect/TASKS';
import { MyUseContextParent } from './LearnReact/React_hooks/useContext/useContext';
import { ChildComponent } from './LearnReact/React_hooks/useContext/task/child';
import { ParentComponent } from './LearnReact/React_hooks/useContext/task/parent';
import { MyUseCallBack } from './LearnReact/React_hooks/useCallback/useCallback';
import { Task1ParentUseCallback } from './LearnReact/React_hooks/useCallback/task/task1parentUseCallback';
import { Task2UseCallback } from './LearnReact/React_hooks/useCallback/task2/task2useCallback';
import { Task3UseCallback } from './LearnReact/React_hooks/useCallback/task3/task3useCallback';
import { MyUseMemo } from './LearnReact/React_hooks/useMemo/useMemo';
import { Task1UseMemo } from './LearnReact/React_hooks/useMemo/task/task1useMemo';
import { FactorialCalculator } from './LearnReact/React_hooks/useMemo/task/task2';
import { MyUseReducer } from './LearnReact/React_hooks/useReducer/useReducer';
import { UseReducerBasketTask1 } from './LearnReact/React_hooks/useReducer/tasks/task1';
import { UseReducerHistoryTask2 } from './LearnReact/React_hooks/useReducer/tasks/task2';
import { UseReducerTodoListTask3 } from './LearnReact/React_hooks/useReducer/tasks/task3';
import { MyUseRef } from './LearnReact/React_hooks/useRef/useRef';
import { UseRefTask2 } from './LearnReact/React_hooks/useRef/tasks/task2';
import { UseRefTask1 } from './LearnReact/React_hooks/useRef/tasks/task1';
import { UseRefTask3 } from './LearnReact/React_hooks/useRef/tasks/task3';
import { UseRefTask4 } from './LearnReact/React_hooks/useRef/tasks/task4';
import { SetMyHookComponent } from './LearnReact/React_hooks/useMyHook/setMyHookComponent';
import { UseMyHookTask1 } from './LearnReact/React_hooks/useMyHook/tasks/task1/task1';
import { UseMyHookTask2 } from './LearnReact/React_hooks/useMyHook/tasks/task2/task2';
import { UseMyHookTask3 } from './LearnReact/React_hooks/useMyHook/tasks/task3/task3';
import { AppRoute } from './LearnReact/React_Router/About_React_Router';
import { MyOutlet } from './LearnReact/React_Router/Outlet_Общая_Разметка';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      {/* <MyUseState /> */}
      {/* <MyUseStateWithObject /> */}

      {/* <MyUseEffect /> */}
      {/* <MyTaskUseEffect /> */}
      
      {/* <MyUseContextParent /> */}

      {/* <ParentComponent /> */}

      {/* <MyUseCallBack />
      <Task1ParentUseCallback />
      <Task2UseCallback />
      <Task3UseCallback /> */}

      {/* <MyUseMemo />
      <Task1UseMemo />
      <FactorialCalculator /> */}

      {/* <MyUseReducer /> */}
      {/* <UseReducerBasketTask1 /> */}
      {/* <UseReducerHistoryTask2 /> */}
      {/* <UseReducerTodoListTask3 /> */}

      {/* <MyUseRef /> */}
      {/* <UseRefTask2 /> */}
      {/* <UseRefTask1 /> */}
      {/* <UseRefTask3 /> */}
      {/* <UseRefTask4 /> */}


      {/* <SetMyHookComponent /> */}
      {/* <UseMyHookTask1 /> */}
      {/* <UseMyHookTask2 /> */}
      {/* <UseMyHookTask3 /> */}

      {/* ⁡⁣⁣⁢React Router⁡ */}
      {/* <AppRoute /> */}
      <MyOutlet />
    </div>
  );
}

export default App;
