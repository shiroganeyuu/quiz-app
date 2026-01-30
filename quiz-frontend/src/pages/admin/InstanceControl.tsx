export default function InstanceControl() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Instance Control</h1>
        <p className="text-gray-600">Start, stop, and manage active quiz sessions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card col-span-1 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Session</h3>
          <div className="space-y-4">
            <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-4">
              <p className="text-sm text-gray-600">No active session</p>
              <button className="btn-primary mt-4 w-full">
                Start New Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
