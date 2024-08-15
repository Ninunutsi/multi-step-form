import { create } from 'zustand'

type FormFieldsI = {
  username: string
  password: string
  email: string
}

type FormType = {
  step: number
  setStep: (step: number) => void
  handleNext: (
    trigger: (name: string) => Promise<boolean>,
    name: string,
  ) => Promise<void>
  handlePrev: () => void
  handleSubmitForm: (data: FormFieldsI) => Promise<void>
}

export const useFormStore = create<FormType>((set) => ({
  step: 0,
  setStep: (newStep: number) => {
    set({ step: newStep })
  },
  //goes to next step only when the input value is correct
  handleNext: async (trigger, name) => {
    const isValid = await trigger(name)
    set((state) => {
      const newStep = isValid
        ? state.step < 3
          ? state.step + 1
          : 4
        : state.step
      return { step: newStep }
    })
  },
  // goes to previous step
  handlePrev: () => {
    set((state) => ({
      step: state.step > 1 ? state.step - 1 : state.step,
    }))
  },
  handleSubmitForm: async (data: FormFieldsI) => {
    try {
      //to mock loading
      await new Promise((resolve) => setTimeout(resolve, 300))
      console.log('Form data submitted successfully:', data)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  },
}))
