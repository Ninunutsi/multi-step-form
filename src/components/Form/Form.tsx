import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { schema } from '../../schema/schema'
import ProgressTracker from '../ProgressTracker'
import FormStep from '../FormStep'
import { useFormStore } from '../../store'
import Introduction from '../Introduction'
import SuccessMessage from '../SuccessMessage'

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

  const { getValues } = methods

  const step = useFormStore((state) => state.step)
  if (step == 0) return <Introduction />
  return (
    <FormProvider {...methods}>
      <div className="sm:w-90 md:w-[70vw] lg:w-[600px] mx-auto p-2 bg-white border border-white rounded-lg shadow-sm my-12  min-h-[150px]">
        <ProgressTracker step={step} />
        <form onSubmit={(e) => e.preventDefault()} className="mt-6">
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
        {step === 4 && (
          <SuccessMessage email={getValues().email} name={getValues().name} />
        )}
      </div>
    </FormProvider>
  )
}

export default Form
