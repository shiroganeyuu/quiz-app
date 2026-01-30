import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-8">
          <div className="flex gap-6 justify-center flex-col sm:flex-row">
            <Link
              to="/admin"
              className="btn-secondary w-40 h-40 flex flex-col items-center justify-center gap-4 text-base"
            >
              <span className="text-6xl">⚙️</span>
              <span className="font-semibold">Admin Panel</span>
            </Link>
            <Link
              to="/quiz"
              className="btn-primary w-40 h-40 flex flex-col items-center justify-center gap-4 text-base"
            >
              <span className="text-6xl">🎯</span>
              <span className="font-semibold">Start Quiz</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
