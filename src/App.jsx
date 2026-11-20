import { Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm.jsx'
import Dashboard from './components/Dashboard.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </>
  )
}

export default App
