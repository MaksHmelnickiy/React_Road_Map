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
import { MyLinkAndNavLink } from './LearnReact/React_Router/Link_Навигация_между_маршрутами';
import { MyUseParams } from './LearnReact/React_Router/React-Router_Hooks/useParams';
import { MyUseParamsTask1 } from './LearnReact/React_Router/React-Router_Hooks/useParams/task1';
import { MyUseNavigate } from './LearnReact/React_Router/React-Router_Hooks/useNavigate_Navigate';
import { MyUseLocation } from './LearnReact/React_Router/React-Router_Hooks/useLocation';
import { ExampleAuth } from './LearnReact/React_Router/Пример_Авторизации';
import { CopyAuth } from './LearnReact/React_Router/Пример_Авторизации/Copy_Auth';
import { MyUseSearchParams } from './LearnReact/React_Router/React-Router_Hooks/useSearchParams';
import { MyNestedRoutes } from './LearnReact/React_Router/Вложенные_роуты';
import { MyUseMatch } from './LearnReact/React_Router/React-Router_Hooks/useMatch';
import { MyUseMatchTask } from './LearnReact/React_Router/React-Router_Hooks/useMatch/task';
import { MyRoute } from './LearnReact/React_Router/Предзагрузка_данных_через_Роутинг';
import { MyErrorElement } from './LearnReact/React_Router/ErrorElement';
import { MyReactRedux } from './LearnReact/Redux/React_Redux';
import  {MyReduxTask1} from './LearnReact/Redux/React_Redux/Reducers/task1';
import { MyReactReduxTask2 } from './LearnReact/Redux/React_Redux/Reducers/task2';
import { MyTask3Redux } from './LearnReact/Redux/React_Redux/Reducers/task3';
import { ReduxTask4 } from './LearnReact/Redux/React_Redux/Reducers/task4';
import ReduxThunkTask5 from './LearnReact/Redux/React_Redux/Reducers/task5/auth';


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

      {/* ⁡⁣⁣​‌‍‌⁡⁢⁣⁣React Router⁡​⁡ */}
      {/* <AppRoute /> */}

      {/* <MyOutlet /> */}

      {/* <MyLinkAndNavLink /> */}

      {/* <MyUseParams /> */}
      {/* <MyUseParamsTask1 /> */}

      {/* <MyUseNavigate /> */}

      {/* <MyUseLocation /> */}

      {/* ⁡⁣⁣⁢Пример авторизации с использованием useNavigate useLocation useContext⁡ */}
      {/* <ExampleAuth /> */}
      {/* <CopyAuth /> */}

      {/* <MyUseSearchParams /> */}

      {/* <MyNestedRoutes /> */}

      {/* <MyUseMatch /> */}
      {/* <MyUseMatchTask /> */}

      {/* ⁡⁣⁣⁢Предзагрузка_данных_через_Роутинг⁡ */}
      {/* <MyRoute /> */}
      {/* <MyErrorElement /> */}

      {/* ​‌‍‌⁡⁢⁣⁣REACT - REDUX⁡​  */}
      {/* <MyReactRedux /> */}
      {/* <MyReduxTask1 /> */}
      {/* <MyReactReduxTask2 /> */}
      {/* <MyTask3Redux /> */}
      {/* <ReduxTask4 /> */}
      <ReduxThunkTask5 />
    </div>
  );
}

export default App;
