import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { schema } from '../../schema/schema'
import ProgressTracker from '../ProgressTracker'
import FormStep from '../FormStep'
import { useFormStore } from '../../store'

const steps = [
  { label: 'სახელი:', name: 'name', isPassword: false },
  { label: 'პაროლი:', name: 'password', isPassword: true },
  { label: 'ელ-ფოსტა:', name: 'email', isLastStep: true },
]

export type FormFieldsI = z.infer<typeof schema>

const Form = () => {
  const methods = useForm<FormFieldsI>({
    defaultValues: { email: '', password: '', name: '' },
    resolver: zodResolver(schema),
  })
  const {
    formState: { errors },
  } = methods
  const step = useFormStore((state) => state.step)
  return (
    <FormProvider {...methods}>
      <div className="sm:w-90 md:w-[70vw] lg:w-[600px] mx-auto  p-4 bg-white border border-white rounded-lg shadow-sm my-12">
        <ProgressTracker step={1} />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-6 min-h-[150px]"
        >
          {step <= steps.length &&
            steps.map(({ label, name, isPassword, isLastStep }, index) =>
              step === index + 1 ? (
                <FormStep
                  key={index}
                  label={label}
                  name={name}
                  password={isPassword}
                  isLastStep={isLastStep}
                  step={step}
                />
              ) : null,
            )}

          {errors.root && (
            <div className="text-red-500">{errors.root.message}</div>
          )}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 my-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            გაგზავნა
          </button>
        </form>
      </div>
    </FormProvider>
  )
}

export default Form
