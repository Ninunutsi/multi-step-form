import { useFormStore } from '../../store'
import AnimatedWrapper from '../Animation'
import Button from '../Button'

const Introduction = () => {
  return (
    <AnimatedWrapper animationKey="1">
      <div className="sm:w-90 md:w-[70vw] flex flex-col items-center justify-center lg:w-[600px] mx-auto p-6 bg-white border border-white rounded-lg shadow-sm my-12 bg-[url('assets/polygon-scatter-haikei.svg')] bg-cover bg-center min-h-80">
        <h1 className="text-3xl font-bold text-sky-600 mb-4">გამარჯობა,</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          პლატფორმაზე რეგისტრაციისთვის გთხოვთ შეიყვანოთ თქვენი მონაცემები
        </p>
        <Button
          className="bg-transparent border border-sky-500 text-sky-500 hover:bg-sky-50"
          onClick={() => useFormStore.getState().setStep(1)}
        >
          დაწყება
        </Button>
      </div>
    </AnimatedWrapper>
  )
}

export default Introduction
