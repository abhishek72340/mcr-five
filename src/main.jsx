import React from 'react'

import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx'
import {RecipeProvider} from "./contexts/recipeContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <RecipeProvider>
                <App/>
            </RecipeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
