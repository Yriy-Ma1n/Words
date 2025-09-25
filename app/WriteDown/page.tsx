'use client'
import { useRef, useState } from "react"
import style from "./page.module.css"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store"
import { add } from "@/features/words/wordsSlice"
import Link from "next/link"

export default function WriteDownScreen() {

    const wordsss = useSelector((state: RootState) => state.words)
    const dispatch = useDispatch()

    const uaField = useRef<HTMLInputElement>(null)
    const engField = useRef<HTMLInputElement>(null)


    const addItemToArr = () => {
        if (!uaField.current!.value || !engField.current!.value) {
            return
        }

        dispatch(add({ eng: engField.current!.value, ua: uaField.current?.value! }))


        setTimeout(() => {
            engField.current!.value = ''
            uaField.current!.value = ''
        }, 100)
    }



    return <>
        <div className={style.container}>
            <div className={style.write}>
                <div className={style.fields}>
                    <input type="text" placeholder="word in eng" ref={engField} />
                    <input type="text" placeholder="word in ua" ref={uaField} />
                </div>
                <div className={style.buttons}>
                    <button onClick={addItemToArr}>Добавить</button>
                    <Link href={'/Guess'}>
                        <button>Начать</button>
                    </Link>
                </div>
            </div>
            <div className={style.words}>
                {wordsss.map((item, i) => item.eng ? <div key={i}>ENG: {item.eng} | UA: {item.ua}</div> : '')}
            </div>
        </div>
    </>
}