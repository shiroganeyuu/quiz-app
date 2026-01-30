import React from 'react'

interface Props {
  teamName?: string
  score?: number
}

export default function Scoreboard({ teamName = 'Team A', score = 0 }: Props) {
  return (
    <aside className="bg-white rounded p-4 shadow">
      <h3 className="font-medium">Scoreboard</h3>
      <div className="mt-2">
        <div className="text-sm text-gray-600">{teamName}</div>
        <div className="text-2xl font-bold">{score}</div>
      </div>
    </aside>
  )
}
