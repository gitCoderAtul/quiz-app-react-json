import { configureStore } from '@reduxjs/toolkit'
import answerSlice from './slices/answerSlice'
import questionSlice from './slices/questionSlice'

export const appStore = configureStore({
  reducer: {
    answers:answerSlice,
    question:questionSlice
  },
})