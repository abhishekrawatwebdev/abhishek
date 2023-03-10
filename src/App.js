import React, { useEffect, useState } from 'react';
import './App.css';
import About from './sections/about/index'
import Footer from './sections/footer';
import Landing from './sections/landing';
import Resume from './sections/Resume';
import ToolsSection from './sections/tools_section';
import Loader from './components/loader';
import TechSection from './sections/tech_sections';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (document.readyState === 'loading') {
      setIsLoading(true)
    }
    else {
      setTimeout(() => {
        setIsLoading(false)
      }, 2500)
    }
  }, [])
  return (
    <>
      {
        isLoading ? <Loader /> :
          <>
            <Landing />
            <About />
            <TechSection />
            <ToolsSection />
            <Resume />
            <Footer />
          </>
      }

    </>
  );
}

export default App;
