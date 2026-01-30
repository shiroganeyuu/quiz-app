export default function MainQuizPage() {
  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Quiz</h1>
        <p className="text-sm text-gray-600">Round 1 — Question 1</p>
      </header>

      <main>
        {/* Question display area */}
        <section className="bg-white rounded-md shadow p-6">
          <h2 className="text-xl font-semibold">Question title</h2>
          <p className="mt-4 text-gray-700">Placeholder for the question content and answers.</p>
        </section>
      </main>
    </div>
  )
}
