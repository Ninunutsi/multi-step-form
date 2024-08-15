import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import PasswordInput from '../Password'
import Rules from '../Rules'
import FormNavigation from '../FormNavigation'
import { FormStepProps } from '../../types'

// This component is used within a form and has different behavior when the input type is "password".
// In addition to the standard input handling, it displays password rules to guide the user in creating a strong password.
// The PasswordInput component is separated to encapsulate the password toggle functionality, keeping the component well-structured.
// This approach enhances maintainability by preventing the main form step component from becoming too large and complex.

const FormStep: React.FC<FormStepProps> = ({
  label,
  nameFormStep,
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
      {password && (
        <Rules
          description="თქვენი უსაფრთხოებისთვის შეიყვანეთ პაროლი რომელიც შეიცავს:"
          rules={['ლათინურ ასოებს', 'რიცხვებს', 'სიმბოლოებს']}
        />
      )}
      <label
        htmlFor={nameFormStep}
        className="block font-medium mb-2 text-sm text-slate-600"
      >
        {label}
      </label>

      {password ? (
        <PasswordInput id={nameFormStep} register={register(nameFormStep)} />
      ) : (
        <input
          type="text"
          id={nameFormStep}
          {...register(nameFormStep)}
          className="border rounded p-2 w-full"
        />
      )}

      {errors[nameFormStep]?.message && (
        <div className="text-red-500 mt-1 text-xs">
          {String(errors[nameFormStep]?.message)}
        </div>
      )}
    </div>
  )
}

export default FormStep
