import { Routes, Route } from 'react-router-dom'
import Form from './Form.jsx'
import Ticket from './Ticket.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/ticket" element={<Ticket />} />
    </Routes>
  )
}

export default App