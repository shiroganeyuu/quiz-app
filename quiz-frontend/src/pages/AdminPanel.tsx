import { Outlet } from 'react-router-dom'
import Sidebar from '../components/admin/Sidebar'

export default function AdminPanel() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />

      <main className="flex-1 p-6">
        {/* Main content area: nested routes render here */}
        <Outlet />
      </main>
    </div>
  )
}
