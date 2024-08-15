import React from 'react'
import Success from '../../assets/svg/Success'
import Button from '../Button'
import { useFormContext } from 'react-hook-form'
import { useFormStore } from '../../store'
import { FormSteps, SuccessMessageI } from '../../types'

const SuccessMessage: React.FC<SuccessMessageI> = ({ email, userName }) => {
  const { reset } = useFormContext()
  // this reset form values and goes to first card component
  const resetForm = () => {
    useFormStore.getState().setStep(FormSteps.Introduction)
    reset()
  }
  return (
    <div className="flex w-[100%] flex-col items-center bg-white p-4 text-center">
      <Success />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        თქვენ წარმატებით გაიარეთ რეგისტრაცია!
      </h3>
      <p className="text-secondary mb-4">
        აპლიკაციაში შესასვლელად მიყევით <b>{email}</b>-ზე გამოგზავნილ
        ინსტრუქციას.
      </p>
      <p className="text-secondary mb-6">
        {userName}, მადლობა დაინტერესებისთვის 😊
      </p>
      <Button
        className="bg-transparent border border-light_accent text-light_accent hover:bg-sky-50"
        onClick={resetForm}
      >
        უკან დაბრუნება
      </Button>
    </div>
  )
}

export default SuccessMessage
