import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="font-bold mb-4">Admin</h2>
      <nav>
        <ul className="space-y-2">
          <li><Link to="quizzes" className="text-blue-600">Quiz Management</Link></li>
          <li><Link to="instance" className="text-blue-600">Instance Control</Link></li>
          <li><Link to="teams" className="text-blue-600">Team Management</Link></li>
        </ul>
      </nav>
    </aside>
  )
}
