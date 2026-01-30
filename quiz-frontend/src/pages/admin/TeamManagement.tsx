export default function TeamManagement() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Team Management</h1>
        <p className="text-gray-600">Create and manage quiz teams</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card col-span-1 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Teams List</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-primary-300 hover:bg-gray-50 transition-all">
              <div className="font-medium text-gray-900">+ Add New Team</div>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
