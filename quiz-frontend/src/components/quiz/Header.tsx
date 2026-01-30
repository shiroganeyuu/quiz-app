import React from 'react'

interface Props {
  round?: number
  questionNumber?: number
}

export default function Header({ round = 1, questionNumber = 1 }: Props) {
  return (
    <header className="mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex gap-12">
          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Round</div>
            <div className="text-4xl font-bold text-primary-600 mt-1">{round}</div>
          </div>

          <div>
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Question</div>
            <div className="text-4xl font-bold text-primary-600 mt-1">{questionNumber}</div>
          </div>
        </div>
      </div>
    </header>
  )
}
