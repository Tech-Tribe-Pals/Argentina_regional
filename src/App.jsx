import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Blogs from "./pages/Blogs";
import Post from "./pages/Post";
import Carousel from "./components/ComponentesRegiones/Carousel";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import SobreMi from "./pages/SobreMi";
import Region from "./pages/Region";
import Page404 from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobremi" element={<SobreMi />} />
      <Route path="/regiones" element={<Carousel />} />
      <Route path="/regiones/:region" element={<Region />} />
      <Route path="/post" element={<Post />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/blog/q" element={<Blogs />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
