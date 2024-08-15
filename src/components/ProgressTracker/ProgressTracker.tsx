import React from 'react'

interface ProgressTrackerProps {
  step: number
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ step }) => {
  const progressPercentage = Math.round((step / 3) * 100) + '%'
  if (step > 3) return null
  return (
    <div>
      <div className="border-b-2 py-2">
        <div className="uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight">
          ეტაპი: {step}/3
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            {step === 1 && (
              <div className="text-lg font-bold text-dark leading-tight my-1">
                შეიყვანეთ თქვენი სახელი
              </div>
            )}
            {step === 2 && (
              <div className="text-lg font-bold text-dark leading-tight">
                შეიყვანეთ პაროლი
              </div>
            )}
            {step === 3 && (
              <div className="text-lg font-bold text-dark leading-tight">
                შეიყვანეთ ელ-ფოსტა
              </div>
            )}
          </div>

          <div className="flex items-center md:w-64">
            <div className="w-full bg-gray-100 rounded-full mr-2">
              <div
                className="rounded-full bg-light_accent text-xs leading-none h-2 text-center text-white"
                style={{
                  width: progressPercentage,
                  transition: 'width 1s ease',
                }}
              ></div>
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
