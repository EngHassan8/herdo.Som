import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import App from './App'
// import App from './App'
import "./index.css"

createRoot(document.getElementById('root')).render(

 <BrowserRouter>
 

 <App />    
 
 </BrowserRouter>


)
