import React from 'react'

interface Props {
  question?: string
  choices?: string[]
}

export default function QuestionDisplay({ question = 'Sample question?', choices = [] }: Props) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{question}</h2>
      <ul className="space-y-3">
        {choices.length > 0 ? (
          choices.map((c, i) => (
            <li key={i}>
              <div className="w-full text-left px-6 py-4 rounded-lg border-2 border-gray-200 bg-white text-gray-800">
                {c}
              </div>
            </li>
          ))
        ) : (
          <li className="text-gray-600 py-4">No choices available</li>
        )}
      </ul>
    </section>
  )
}
