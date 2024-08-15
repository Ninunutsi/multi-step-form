import { z } from 'zod'
import { schema } from './schema/schema'

export enum FormSteps {
  Introduction = 0,
  Name = 1,
  Password = 2,
  Email = 3,
  Success = 4,
}

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

export interface ProgressTrackerProps {
  step: number
}
