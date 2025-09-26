'use client'
import { useEffect, useRef, useState } from "react"
import style from "./page.module.css"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store"
import { add } from "@/features/words/wordsSlice"
import Word from "@/components/word/word"
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

        dispatch(add({ eng: engField.current!.value, ua: uaField.current?.value!, id: crypto.randomUUID() }))


        setTimeout(() => {
            engField.current!.value = ''
            uaField.current!.value = ''
        }, 100)
    }

    const addItemToArrEnter = (e:React.KeyboardEvent) => {
        if(e.key !== 'Enter'){
            return
        }
        
       addItemToArr()
    }

    return <>
        <div className={style.container} onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => addItemToArrEnter(e)}>
            <div className={style.write}>
                <div className={style.fields}>
                    <input type="text" placeholder="word in eng" ref={engField} />
                    <input type="text" placeholder="word in ua" ref={uaField} />
                </div>
                <div className={style.buttons}>
                    <button
                        onClick={addItemToArr}
                    >Добавить</button>
                    <Link href={'/Guess'}>
                        <button>Начать</button>
                    </Link>
                </div>
            </div>
            <div className={style.words}>
                {wordsss.map((item, i) => item.eng ? <Word key={item.id} eng={item.eng} ua={item.ua} id={item.id} /> : '')}
            </div>
        </div>
    </>
}