import { HashRouter, Routes, Route } from 'react-router-dom';

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
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default App;