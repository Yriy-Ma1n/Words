'use client'
import { useState } from "react"
import style from "./word.module.css"

export default function Word(props: { eng: string, ua: string }) {
    const [isShow, setShow] = useState(true)

    if (isShow) {
        return <div className={style.containerText}>
            <div className={style.aLittleWidth}><p className={style.leftSide}>ENG: {props.eng}</p>  <p className={style.rightSide}>UA: {props.ua}</p>  </div>
            <button className={style.deleteButton} onClick={() => setShow(false)}>delete</button>
        </div>
    } else {
        return null
    }


}