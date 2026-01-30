import React from 'react'

interface Props {
  question?: string
  choices?: string[]
}

export default function QuestionDisplay({ question = 'Sample question?', choices = [] }: Props) {
  return (
    <section>
      <h2 className="text-xl font-semibold">{question}</h2>
      <ul className="mt-4 space-y-2">
        {choices.length > 0 ? (
          choices.map((c, i) => (
            <li key={i} className="bg-gray-50 p-2 rounded">{c}</li>
          ))
        ) : (
          <li className="text-gray-600">Choice placeholders</li>
        )}
      </ul>
    </section>
  )
}
