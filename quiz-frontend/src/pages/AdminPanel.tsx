import { Outlet } from 'react-router-dom'

export default function AdminPanel() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <nav>
        <ul>
          <li><a href="/admin/quizzes">Quiz Management</a></li>
          <li><a href="/admin/instance">Current Instance Control</a></li>
          <li><a href="/admin/teams">Team Management</a></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
