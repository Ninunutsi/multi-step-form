import React from 'react'

interface SuccessMessageI {
  email: string
  name: string
}

const SuccessMessage: React.FC<SuccessMessageI> = ({ email, name }) => {
  const resetForm = () => {
    console.log('reset form')
  }
  return (
    <div className="flex flex-col items-center bg-white p-6 text-center">
      <svg
        className="w-16 h-16 text-green-600 mb-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
        />
        <path
          fill="#fff"
          d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
        />
      </svg>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        თქვენ წარმატებით გაიარეთ რეგისტრაცია!
      </h3>
      <p className="text-gray-600 mb-4">
        აპლიკაციაში შესასვლელად მიყევით <b>{email}</b>-ზე გამოგზავნილ
        ინსტრუქციას.
      </p>
      <p className="text-gray-600 mb-6">{name}, მადლობა დაინტერესებისთვის 😊</p>
      <button
        className="bg-transparent border border-sky-500 text-sky-500 hover:bg-sky-50"
        onClick={resetForm}
      >
        უკან დაბრუნება
      </button>
    </div>
  )
}

export default SuccessMessage
