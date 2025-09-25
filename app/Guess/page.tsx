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
    const [gradeEn, setGrade] = useState(0)
    const [gradeUa, setGradeUa] = useState(0)

    const nextButton = () => {
        const currWord = words[count].ua.trim().replaceAll(' ', '').toLocaleLowerCase()
        const inputWord = input.current?.value.trim().replaceAll(' ', '').toLocaleLowerCase()



        if(currWord === inputWord){
            setGrade(currGrade => currGrade + 1)
            
        }
        changeCount(currCount => currCount + 1)

        setTimeout(()=>{
            if(input.current){
                input.current.value = ''
            }
        },50)

    }
    const nextButtonUa = () => {
      
        
        const currWord = words[countua].eng.trim().replaceAll(' ', '').toLocaleLowerCase()
        const inputWord = input.current?.value.trim().replaceAll(' ', '').toLocaleLowerCase()

        if(currWord === inputWord){

            setGradeUa(currGrade => currGrade + 1)
           
        }

        changeCountUa(currCount => currCount + 1)

         setTimeout(()=>{
            if(input.current){
                input.current.value = ''
            }
        },50)
    }



    if (words[count]) {
        return <div className={styles.container}>
            <div className={styles.wordType}>
                <div className={styles.hideWord}>WORD:{words[count].eng}</div>
                <input type="text" placeholder="ua" ref={input} />
                <button onClick={nextButton}>next</button>
            </div>
        </div>
    } else {

        if (words[countua]) {
            return <div className={styles.container}>
                <div className={styles.wordType}>
                    <div className={styles.fz}>WORD:{words[countua].ua}</div>
                    <input type="text" placeholder="eng" ref={input} />
                    <button onClick={nextButtonUa}>nextt</button>
                </div>
            </div>
        } else {
            return <div className={styles.engGame}>
                <div>
                    <h1>Your result:{gradeEn + gradeUa}/{words.length * 2}</h1>
                </div>
                <Link href={'/'}>
                    <button>Start again</button>
                </Link>
            </div>

        }

    }
}