import React from 'react'

interface Props {
  teamName?: string
  score?: number
}

export default function Scoreboard({ teamName = 'Team A', score = 0 }: Props) {
  return (
    <aside className="card border-l-4 border-primary-600">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Scoreboard</h3>
      <div className="space-y-3">
        <div>
          <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Team</div>
          <div className="text-lg text-gray-900 mt-1">{teamName}</div>
        </div>
        <div className="pt-3 border-t border-gray-200">
          <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Points</div>
          <div className="text-4xl font-bold text-primary-600 mt-1">{score}</div>
        </div>
      </div>
    </aside>
  )
}
