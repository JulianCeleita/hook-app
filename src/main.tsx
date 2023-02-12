import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './useState/CounterApp';
// import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
// import { SimpleForm } from './useEffect/SimpleForm';
// import { FormWithCustomHook } from './useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './examples/MultipleCustomHooks';
// import { FocusScreen } from './useRef/FocusScreen';
// import { Layout } from './useLayoutEffect/Layout';
// import { Memorize } from './memos/Memorize';
// import { MemoHook } from './memos/MemoHook';
// import { CallbackHooks } from './memos/CallbackHooks';
// import { Father } from './memoHomework/Father';
// import './useReducer/intro-reducer';
// import { TodoApp } from './useReducer/TodoApp';
import { MainApp } from './useContext';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//<React.StrictMode>
<BrowserRouter>
    <MainApp />
</BrowserRouter>
 // </React.StrictMode>
)
