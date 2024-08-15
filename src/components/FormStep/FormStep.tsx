import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import PasswordInput from '../Password'
import FormNavigation from '../FormNavigation'

type InputName = 'name' | 'email' | 'password' | string

interface FormStepProps {
  label: string
  name: InputName
  isLastStep?: boolean
  step?: any
  password?: boolean
}

const FormStep: React.FC<FormStepProps> = ({
  label,
  name,
  isLastStep,
  step,
  password,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    if (step <= 3) {
      const firstInput = document.querySelector('input')
      if (firstInput) firstInput.focus()
    }
  }, [step])

  return (
    <div>
      <label
        htmlFor={name}
        className="block font-medium mb-2 text-sm text-slate-600"
      >
        {label}
      </label>

      {password ? (
        <PasswordInput id={name} register={register(name)} />
      ) : (
        <input
          type="text"
          id={name}
          {...register(name)}
          className="border rounded p-2 w-full"
        />
      )}

      {errors[name]?.message && (
        <div className="text-red-500 mt-1 text-xs">
          {String(errors[name]?.message)}
        </div>
      )}
      <FormNavigation isLastStep={isLastStep} name={name} />
    </div>
  )
}

export default FormStep
