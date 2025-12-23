import { ConfigProvider } from 'antd';
import './App.css';
import HomeApp from './pages/home-app';
//@ts-ignore
import '@fontsource-variable/outfit';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '"Outfit Variable", sans-serif'
        }
      }}
    >
      <HomeApp />
    </ConfigProvider>
  )
}

export default App