import React, { useState } from 'react'
import { useFormStore } from '../../store'
import Button from '../Button'
import { useFormContext } from 'react-hook-form'
import Loading from '../../assets/svg/Loading'
import { FormFieldsI, FormNavigationProps, FormSteps } from '../../types'

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
        const formData = getValues() as FormFieldsI
        const { email, name, password } = formData
        await handleSubmitForm({ email, password, name })
        setStep(FormSteps.Success)
      } else {
        handleNext(trigger, nameNavigation)
      }
    }
    setIsLoading(false)
  }

  return (
    <div className="mt-4 flex justify-end">
      {step > FormSteps.Name && (
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
        className="bg-accent hover:bg-sky-800 focus:ring-blue-300 flex items-center text-white"
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
