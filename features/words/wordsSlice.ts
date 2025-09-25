import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface WordsArr { eng: string, ua: string }

const initialState: WordsArr[] = []

export const wordsArr = createSlice({
    name: 'wordsArr',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<WordsArr>) => {
            state.push(action.payload)
        }
    },
})


export const { add } = wordsArr.actions

export default wordsArr.reducer