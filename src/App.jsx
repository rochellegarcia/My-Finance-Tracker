import { Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm.jsx'
import Dashboard from './components/Dashboard.jsx'
import SignUpForm from './components/SignUpForm.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signupform" element={<SignUpForm />} />
      </Routes>

    </>
  )
}

export default App
