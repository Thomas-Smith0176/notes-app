import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NotePage from './components/NotePage'

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="notes/:noteId" element={<NotePage />} />
      </Routes>
    </main>
  )
}

export default App
