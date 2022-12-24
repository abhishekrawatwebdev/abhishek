import React, { useEffect, useState } from 'react';
import './App.css';
import About from './sections/about/index'
import Footer from './sections/footer';
import Landing from './sections/landing';
import Resume from './sections/Resume';
import ToolsSection from './sections/tools_section';
import Loader from './components/loader';
function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (document.readyState === 'loading') {
      setIsLoading(true)
    }
    else {
      setIsLoading(false)
    }
  }, [])
  return (
    <>
      {
        isLoading ? <Loader /> : <><Landing />
          <About />
          <ToolsSection />
          <Resume />
          <Footer /></>
      }

    </>
  );
}

export default App;
