import { ConfigProvider } from 'antd';
import './App.css';
import HomeApp from './pages/home-app';
//@ts-ignore
import '@fontsource-variable/outfit';
import { Layout } from './layout/layout';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: '"Outfit Variable", sans-serif'
        }
      }}
    >
      <Layout>
        <HomeApp />
      </Layout>
    </ConfigProvider>
  )
}

export default App