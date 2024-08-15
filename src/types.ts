import { z } from 'zod'
import { schema } from './schema/schema'

export interface FormNavigationProps {
  isLastStep?: boolean
  nameNavigation: string
}

type InputName = 'name' | 'email' | 'password' | string

export interface FormStepProps {
  label: string
  nameFormStep: InputName
  isLastStep?: boolean
  step: number
  password?: boolean
}

export interface SuccessMessageI {
  email: string
  userName: string
}

export type FormFieldsI = z.infer<typeof schema>
