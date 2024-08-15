import React, { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import EyeIcon from '../../assets/svg/EyeIcon'

interface PasswordInputProps {
  id: string
  register: UseFormRegisterReturn
}

const PasswordInput: React.FC<PasswordInputProps> = ({ id, register }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <div className="relative">
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        id={id}
        {...register}
        className="border rounded p-2 w-full"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus:text-blue-600"
      >
        <EyeIcon isPasswordVisible={isPasswordVisible} />
      </button>
    </div>
  )
}

export default PasswordInput
