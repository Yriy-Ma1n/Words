import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface WordsArr { eng: string, ua: string, id:string }

const initialState: WordsArr[] = []

export const wordsArr = createSlice({
    name: 'wordsArr',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<WordsArr>) => {
            state.push(action.payload)
        },
        deleteOne: (state, action: PayloadAction<string>) => {
            return state.filter(item=>item.id !== action.payload)
        }
    },
})


export const { add, deleteOne } = wordsArr.actions

export default wordsArr.reducer