
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Todos from './pages/Todos'
import Swapi from './pages/Swapi'
import { Layout } from './components/Layout'
import Container from '@mui/material/Container';
import { ThemeContext } from './features/ThemeContext/ThemeContext'
import { useContext } from 'react'
import './App.css'

function App() {

  const { theme } = useContext(ThemeContext);
  return (
    <Container maxWidth="lg" className={`${theme} app`} >

      <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
<Route path='/todos' element={<Todos/>}/>
<Route path='/swapi' element={<Swapi/>}/>  
      </Route>
<Route path='*' element={<Navigate to = "/"/>}/>
    </Routes>


      </Container> 
  )
}

export default App
