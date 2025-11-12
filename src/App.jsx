import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Library from './pages/Library'
import DocumentDetail from './pages/DocumentDetail'
import Departments from './pages/Departments'
import Help from './pages/Help'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/library" element={<Library />} />
      <Route path="/document/:id" element={<DocumentDetail />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  )
}

export default App
