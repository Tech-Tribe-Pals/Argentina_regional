import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Forum from './pages/Forum';
import Post from './pages/Post';
import Primer from './components/ComponentesRegiones/Primer';
import Home from './pages/Home';
import Tandil from './pages/Tandil';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tandil" element={<Tandil />} />
        <Route path="/regiones" element={<Primer />} />
        <Route path="/post" element={<Post />} />
        <Route path="/foro" element={<Forum />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

