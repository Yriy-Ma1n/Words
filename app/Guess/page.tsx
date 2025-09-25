'use client'
import styles from "./page.module.css"

import { RootState } from "@/store"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

export default function Guess() {

    const input = useRef<HTMLInputElement>(null)

    const words = useSelector((state: RootState) => state.words)
    const [count, changeCount] = useState(0)
    const [countua, changeCountUa] = useState(0)

    const nextButton = () => {
        changeCount(currCount => currCount + 1)
    }
    const nextButtonUa = () => {

        changeCountUa(currCount => currCount + 1)
    }



    if (words[count]) {
        return <div className={styles.container}>
            <div className={styles.wordType}>
                <div>WORD:{words[count].eng}</div>
                <input type="text" placeholder="ua" ref={input} />
                <button onClick={nextButton}>next</button>
            </div>
        </div>
    } else {

        if (words[countua]) {
            return <div className={styles.container}>
                <div className={styles.wordType}>
                    <div>WORD:{words[countua].ua}</div>
                    <input type="text" placeholder="eng" ref={input} />
                    <button onClick={nextButtonUa}>nextt</button>
                </div>
            </div>
        } else {
            return <Link href={'/'}>
                <button>Start again</button>
                </Link>
        }

    }
}