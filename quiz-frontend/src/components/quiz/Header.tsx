import React from 'react'

interface Props {
  round?: number
  questionNumber?: number
}

export default function Header({ round = 1, questionNumber = 1 }: Props) {
  return (
    <header className="mb-6 flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">Round</div>
        <div className="text-xl font-bold">{round}</div>
      </div>

      <div>
        <div className="text-sm text-gray-500">Question</div>
        <div className="text-xl font-bold">{questionNumber}</div>
      </div>
    </header>
  )
}
