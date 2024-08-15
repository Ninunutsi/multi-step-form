import React from 'react'
import Success from '../../assets/svg/Success'
import Button from '../Button'
import { useFormContext } from 'react-hook-form'
import { useFormStore } from '../../store'

interface SuccessMessageI {
  email: string
  name: string
}

const SuccessMessage: React.FC<SuccessMessageI> = ({ email, name }) => {
  const { reset } = useFormContext()
  // this reset form values and goes to first card component
  const resetForm = () => {
    useFormStore.getState().setStep(0)
    reset()
  }
  return (
    <div className="flex flex-col items-center bg-white p-6 text-center">
      <Success />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        თქვენ წარმატებით გაიარეთ რეგისტრაცია!
      </h3>
      <p className="text-gray-600 mb-4">
        აპლიკაციაში შესასვლელად მიყევით <b>{email}</b>-ზე გამოგზავნილ
        ინსტრუქციას.
      </p>
      <p className="text-gray-600 mb-6">{name}, მადლობა დაინტერესებისთვის 😊</p>
      <Button
        className="bg-transparent border border-sky-500 text-sky-500 hover:bg-sky-50"
        onClick={resetForm}
      >
        უკან დაბრუნება
      </Button>
    </div>
  )
}

export default SuccessMessage
