import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Sidebar() {
  const location = useLocation()

  const isActive = (path: string) => location.pathname.includes(path)

  return (
    <aside className="w-64 bg-white border-r border-gray-200 shadow-sm sticky top-0 h-screen overflow-y-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary-600 mb-8">Admin Panel</h2>
        <nav className="space-y-2">
          <ul className="space-y-2">
            <li>
              <Link
                to="quizzes"
                className={isActive('quizzes') ? 'nav-link-active' : 'nav-link'}
              >
                <span className="font-medium">📋 Quiz Management</span>
              </Link>
            </li>
            <li>
              <Link
                to="instance"
                className={isActive('instance') ? 'nav-link-active' : 'nav-link'}
              >
                <span className="font-medium">⚙️ Instance Control</span>
              </Link>
            </li>
            <li>
              <Link
                to="teams"
                className={isActive('teams') ? 'nav-link-active' : 'nav-link'}
              >
                <span className="font-medium">👥 Team Management</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
