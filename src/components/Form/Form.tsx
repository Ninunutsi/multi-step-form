import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from '../../schema/schema'
import ProgressTracker from '../ProgressTracker'
import FormStep from '../FormStep'
import { useFormStore } from '../../store'
import Introduction from '../Introduction'
import SuccessMessage from '../SuccessMessage'
import { FormFieldsI, FormSteps } from '../../types'
import FormNavigation from '../FormNavigation'

const steps = [
  { label: 'სახელი:', name: 'name', isPassword: false },
  { label: 'პაროლი:', name: 'password', isPassword: true },
  { label: 'ელ-ფოსტა:', name: 'email', isLastStep: true },
]

const Form = () => {
  const methods = useForm<FormFieldsI>({
    defaultValues: { email: '', password: '', name: '' },
    resolver: zodResolver(schema),
  })

  const { getValues } = methods

  const step = useFormStore((state) => state.step)

  if (step === FormSteps.Introduction) return <Introduction />
  return (
    <FormProvider {...methods}>
      <div className="card-base">
        <ProgressTracker step={step} />
        <form onSubmit={(e) => e.preventDefault()} className="mt-6">
          {step <= steps.length &&
            steps.map(({ label, name, isPassword, isLastStep }, index) =>
              step === index + 1 ? (
                <>
                  <FormStep
                    key={index}
                    label={label}
                    nameFormStep={name}
                    password={isPassword}
                    isLastStep={isLastStep}
                    step={step}
                  />
                  <FormNavigation
                    isLastStep={isLastStep}
                    nameNavigation={name}
                  />
                </>
              ) : null,
            )}
        </form>
        {step === FormSteps.Success && (
          <SuccessMessage
            email={getValues().email}
            userName={getValues().name}
          />
        )}
      </div>
    </FormProvider>
  )
}

export default Form
