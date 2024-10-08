import React from 'react'
import { ProgressTrackerProps } from '../../types'

const stepLabels = [
  'შეიყვანეთ თქვენი სახელი',
  'შეიყვანეთ პაროლი',
  'შეიყვანეთ ელ-ფოსტა',
]

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ step }) => {
  const totalSteps = stepLabels.length
  const isValidStep = step <= totalSteps
  const progressPercentage = isValidStep
    ? Math.round((step / totalSteps) * 100) + '%'
    : '0%'

  if (!isValidStep) return null

  return (
    <div>
      <div className="border-b-2 py-2">
        <div className="uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight">
          ეტაპი: {step}/{totalSteps}
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <div className="text-lg font-bold text-dark leading-tight my-1">
              {stepLabels[step - 1]}
            </div>
          </div>

          <div className="flex items-center md:w-64">
            <div className="w-full bg-gray-100 rounded-full mr-2">
              <div
                className="rounded-full bg-light_accent text-xs leading-none h-2 text-center text-white"
                style={{
                  width: progressPercentage,
                  transition: 'width 1s ease',
                }}
              />
            </div>
            <div className="text-xs w-10 text-secondary">
              {progressPercentage}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressTracker
