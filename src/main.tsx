import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import { CounterApp } from './useState/CounterApp';
import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>
)
