import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainQuizPage from './pages/MainQuizPage'
import AdminPanel from './pages/AdminPanel'
import QuizManagement from './pages/admin/QuizManagement'
import InstanceControl from './pages/admin/InstanceControl'
import TeamManagement from './pages/admin/TeamManagement'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<MainQuizPage />} />

        <Route path="/admin" element={<AdminPanel />}>
          <Route path="quizzes" element={<QuizManagement />} />
          <Route path="instance" element={<InstanceControl />} />
          <Route path="teams" element={<TeamManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
