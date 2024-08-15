import { useFormStore } from '../../store'
import { FormSteps } from '../../types'
import AnimatedWrapper from '../Animation'
import Button from '../Button'

const Introduction = () => {
  return (
    <AnimatedWrapper animationKey="1">
      <div className="w-[95%] sm:w-[80vw] md:w-[70vw] mt-20 sm:mt-12 flex flex-col items-center justify-center lg:w-[600px] mx-auto p-6 bg-white border border-white rounded-lg shadow-sm my-12 bg-[url('assets/polygon-scatter-haikei.svg')] bg-cover bg-center min-h-80">
        <h1 className="text-2xl sm:text-3xl font-bold text-accent mb-4">
          გამარჯობა,
        </h1>
        <p className="text-sm sm:text-lg text-primary mb-6 text-center">
          პლატფორმაზე რეგისტრაციისთვის გთხოვთ შეიყვანოთ თქვენი მონაცემები
        </p>
        <Button
          className="bg-transparent border border-light_accent text-light_accent hover:bg-sky-50"
          onClick={() => useFormStore.getState().setStep(FormSteps.Name)}
        >
          დაწყება
        </Button>
      </div>
    </AnimatedWrapper>
  )
}

export default Introduction
