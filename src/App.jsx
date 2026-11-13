import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/certificate';
import Contact from './components/Contact';

import ProjectsPreview from './components/ProjectsPreview';
import Projects from './pages/projects';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <ProjectsPreview />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;