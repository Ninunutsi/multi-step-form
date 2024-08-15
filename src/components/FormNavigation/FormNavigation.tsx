import React, { useState } from 'react'
import { useFormStore } from '../../store'
import Button from '../Button'
import { useFormContext } from 'react-hook-form'
import Loading from '../../assets/svg/Loading'
import { FormNavigationProps } from '../../types'

const FormNavigation: React.FC<FormNavigationProps> = ({
  isLastStep,
  nameNavigation,
}) => {
  const { trigger, getValues } = useFormContext()
  const { handleNext, handlePrev, step, handleSubmitForm, setStep } =
    useFormStore()

  const [isLoading, setIsLoading] = useState(false)

  //checks input, on last step submits data and logs it in console
  const handleClick = async () => {
    setIsLoading(true)
    const isValid = await trigger(nameNavigation)
    if (isValid) {
      if (isLastStep) {
        const formData = getValues()
        const { email, name, password } = formData
        await handleSubmitForm({ email, password, name })
        setStep(4)
      } else {
        handleNext(trigger, nameNavigation)
      }
    }
    setIsLoading(false)
  }

  return (
    <div className="mt-4 flex justify-end">
      {step > 1 && (
        <Button
          onClick={handlePrev}
          className="bg-slate-400 hover:bg-gray-700 focus:ring-gray-300 text-white"
          disabled={isLoading}
        >
          უკან
        </Button>
      )}
      <Button
        onClick={handleClick}
        type={isLastStep ? 'submit' : 'button'}
        disabled={isLoading}
        className="bg-sky-600 hover:bg-sky-800 focus:ring-blue-300 flex items-center text-white"
      >
        {isLoading ? (
          <div role=" flex">
            <Loading />
          </div>
        ) : isLastStep ? (
          'რეგისტრაცია'
        ) : (
          'შემდეგი'
        )}
      </Button>
    </div>
  )
}

export default FormNavigation
