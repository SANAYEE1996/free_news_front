import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './AppRouter.jsx'

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
    <AppRouter tab="home"/>
);

//ReactDOM.createRoot(document.getElementById('root')).render(<App />)
