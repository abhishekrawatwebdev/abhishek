import React from 'react';
import './App.css';
import About from './sections/about/index'
import Footer from './sections/footer';
import Resume from './sections/Resume';
import ToolsSection from './sections/tools_section';
function App() {
  return (
    <>
      <About />
      <ToolsSection />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
