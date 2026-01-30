import QuestionDisplay from '../components/quiz/QuestionDisplay'
import Timer from '../components/quiz/Timer'
import Header from '../components/quiz/Header'

export default function MainQuizPage() {
  return (
    <div className="min-h-screen p-6 relative">
      <main className="max-w-3xl mx-auto">
        <Header round={1} questionNumber={1} />

        <section className="bg-white rounded-md shadow p-6">
          <QuestionDisplay
            question="What is the capital of France?"
            choices={["Paris", "Madrid", "Rome", "Berlin"]}
          />
        </section>
      </main>

      <div className="absolute right-6 bottom-6 z-50">
        <Timer seconds={30} />
      </div>
    </div>
  )
}
