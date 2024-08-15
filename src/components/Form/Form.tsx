import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { schema } from '../../schema/schema'
import ProgressTracker from '../ProgressTracker'
import FormStep from '../FormStep'
import { useFormStore } from '../../store'
import Introduction from '../Introduction'

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

  const step = useFormStore((state) => state.step)
  if (step == 0) return <Introduction />
  return (
    <FormProvider {...methods}>
      <div className="sm:w-90 md:w-[70vw] lg:w-[600px] mx-auto  p-4 bg-white border border-white rounded-lg shadow-sm my-12">
        <ProgressTracker step={step} />
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
        </form>
      </div>
    </FormProvider>
  )
}

export default Form
