import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'  
import MainLayout from './components/MainLayout.jsx'    
import NewRegister from './components/NewRegister.jsx'
import Login from './components/Login.jsx'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
            <Route element={<MainLayout />} >
            <Route path="newregister" element={<NewRegister />} />
            <Route path="login" element={<Login />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
   
            </Route>
        </Routes>
    </BrowserRouter>



)
