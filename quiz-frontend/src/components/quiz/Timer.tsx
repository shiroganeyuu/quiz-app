import React from 'react'

interface Props {
  seconds?: number
}

export default function Timer({ seconds = 30 }: Props) {
  const isLow = seconds <= 10
  const isCritical = seconds <= 5

  return (
    <div className={`rounded-lg shadow-lg p-4 text-center transition-all ${
      isCritical ? 'bg-danger-50 border-2 border-danger-500' : isLow ? 'bg-accent-50 border-2 border-accent-500' : 'bg-white border-2 border-gray-200'
    }`}>
      <div className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
        isCritical ? 'text-danger-600' : isLow ? 'text-accent-600' : 'text-gray-600'
      }`}>
        Time Remaining
      </div>
      <div className={`text-4xl font-bold font-mono ${
        isCritical ? 'text-danger-600 animate-pulse' : isLow ? 'text-accent-600' : 'text-primary-600'
      }`}>
        {seconds}s
      </div>
    </div>
  )
}
