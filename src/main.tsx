import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* basename подхватывает значение из vite.config.base автоматически */}
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)