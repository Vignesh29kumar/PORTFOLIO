import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './component/intro';
// import Courses from './components/Courses';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          {/* <Route path="/courses" element={<Courses />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
