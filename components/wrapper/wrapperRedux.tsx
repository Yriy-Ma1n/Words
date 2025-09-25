'use client'

import { store } from "@/store"
import { ReactElement, ReactNode } from "react"

import { Provider } from "react-redux"

export default function WrapperRedux({ children }: { children: ReactNode }) {
    return <Provider store={store}>
        {children}
    </Provider>
}