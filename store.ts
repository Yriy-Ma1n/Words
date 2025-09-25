import { configureStore } from '@reduxjs/toolkit'
import { wordsArr } from './features/words/wordsSlice'
export const store = configureStore({
  reducer: {
    words:wordsArr.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch