import './App.css'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Renderer from './components/Renderer'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>Website is under construction.</h1>
            <p>Please check back later.</p>
            <p>Thank you for your patience.</p>
            <p>Rimpom Dutta</p>
            <p>English Teacher</p>
            <p>
              <Link to="/about">About page</Link>
            </p>
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <h1>About</h1>
            <p>This route is active and ready for your next content update.</p>
            <p>
              <Link to="/">Back home</Link>
            </p>
          </>
        }
      />
      <Route
        path="/chapters"
        element={
          <>
            <Renderer />
          </>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
