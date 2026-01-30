import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="flex gap-4 justify-center mt-4">
          <Link to="/quiz" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Start Quiz</Link>
          <Link to="/admin" className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg">Admin Panel</Link>
        </div>
      </div>
    </div>
  )
}
