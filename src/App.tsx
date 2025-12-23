import { ConfigProvider } from 'antd';
import './App.css';
import HomeApp from './pages/home-app';
//@ts-ignore
import '@fontsource-variable/outfit';
import { useState } from 'react';
import { SplashScreen } from './components/animations/splash-screen';
import { Layout } from './layout/layout';

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
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '"Outfit Variable", sans-serif'
        }
      }}
    >
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && (
        <Layout>
          <HomeApp startAnimations={startAnimations} />
        </Layout>
      )}
    </ConfigProvider>
  )
}

export default App