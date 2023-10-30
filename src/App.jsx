import './App.css'
import Layout from './Component/Layout/Layout'
import { AuthProvider } from './contexts/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
        <Layout></Layout>
      </AuthProvider>
    </>
  )
}

export default App
