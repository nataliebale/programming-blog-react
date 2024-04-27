import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/footer";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Blog from "./components/pages/blog/Blog";

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
