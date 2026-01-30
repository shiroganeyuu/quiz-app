export default function QuizManagement() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Quiz Management</h1>
        <p className="text-gray-600">Create, edit, and manage your quizzes</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Create New Quiz</h3>
          <button className="btn-primary w-full">
            + Add Quiz
          </button>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Existing Quizzes</h3>
          <div className="space-y-3">
            <p className="text-gray-600 text-sm">No quizzes created yet</p>
          </div>
        </div>
      </div>
    </div>
  )
}
