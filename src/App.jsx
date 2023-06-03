import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import Forum from './pages/Forum'
import Post from './pages/Post'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/post' element={ <Post /> } />
    <Route path='/foro' element={ <Forum /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
