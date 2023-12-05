"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Typed from "typed.js"

export default function AddRecord () {
    const header_el = useRef(null)
    const header_typed = useRef(null)

    useEffect(() => {
        const options = {
            strings : ["Add a medical record into your Decentralized Web Nodes(DWNs)."],
            typeSpeed : 100
        }

        header_typed.current = new Typed(header_el.current, options)

        return () => {
            header_typed.current.destroy()
        }
    }, [])

    return (
        <div id="add-record" className="shadow-lg my-8 mx-24 px-4 py-8 rounded-md">
            <h1 className="font-mono font-bold text-4xl text-black text-center m-4" ref={header_el}/>
        </div>
    )
}