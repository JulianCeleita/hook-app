import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './useState/CounterApp';
// import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
import { SimpleForm } from './useEffect/SimpleForm';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//<React.StrictMode>
    <SimpleForm />
 // </React.StrictMode>
)
