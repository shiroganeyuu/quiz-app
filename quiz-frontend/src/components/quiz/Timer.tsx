import React from 'react'

interface Props {
  seconds?: number
}

export default function Timer({ seconds = 30 }: Props) {
  return (
    <div className="bg-white rounded p-3 shadow text-center">
      <div className="text-sm text-gray-600">Time Remaining</div>
      <div className="text-xl font-bold">{seconds}s</div>
    </div>
  )
}
