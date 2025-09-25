'use client'
import { useId, useState } from "react"
import style from "./word.module.css"
import { useDispatch } from "react-redux"
import { deleteOne } from "@/features/words/wordsSlice"

export default function Word(props: { eng: string, ua: string, id:string }) {
    const [isShow, setShow] = useState(true)
    const dispath = useDispatch()
    

    const a = () => {
        setShow(false)
        dispath(deleteOne(props.id))
        
    }

    if (isShow) {
        return <div className={style.containerText}>
            <div className={style.aLittleWidth}><p className={style.leftSide}>ENG: {props.eng}</p>  <p className={style.rightSide}>UA: {props.ua}</p>  </div>
            <button className={style.deleteButton} onClick={a}>delete</button>
        </div>
    } else {
        return null
    }


}