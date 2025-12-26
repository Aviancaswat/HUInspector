import { ConfigProvider } from 'antd';
import './App.css';
import HomeApp from './pages/home-app';
//@ts-ignore
import '@fontsource-variable/outfit';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SplashScreen } from './components/animations/splash-screen';
import { Layout } from './layout/layout';
import { HUInspectorPage } from './pages/hu-inspector-page';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [startAnimations, setStartAnimations] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Pequeño delay para que el splash termine completamente
    setTimeout(() => {
      setStartAnimations(true);
    }, 50);
  };

  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: '"Outfit Variable", sans-serif'
          }
        }}
      >
        <Routes>
          <Route 
            path='/' 
            element={
              <>
                {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
                {!showSplash && (
                  <Layout>
                    <HomeApp startAnimations={startAnimations} />
                  </Layout>
                )}
              </>
            } 
          />
          <Route path='/app' element={<HUInspectorPage />} />
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  )
}

export default App