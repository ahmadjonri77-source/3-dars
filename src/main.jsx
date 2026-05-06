import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './companets/header/Header'
import Main from './companets/main/main'
import Footer from './companets/footer/Footer'
import Nav from './enter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
  </StrictMode>,
)
