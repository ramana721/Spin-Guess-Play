import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, GamePage, NotFoundPage } from '../pages'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
