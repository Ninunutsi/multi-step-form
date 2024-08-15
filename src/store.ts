import { create } from 'zustand'

type FormType = {
  step: number
  setStep: (step: number) => void
}

export const useFormStore = create<FormType>((set) => ({
  step: 0,
  setStep: (newStep: number) => {
    set({ step: newStep })
  },
}))
