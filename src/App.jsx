import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import AIChatbot from './components/AIChatbot';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Navbar />
        <AIChatbot />
      </ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;