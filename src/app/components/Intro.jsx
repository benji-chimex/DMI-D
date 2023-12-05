"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import Typed from "typed.js"

export default function Intro () {
    const header_el = useRef(null)
    const header_typed = useRef(null)

    useEffect(() => {
        const options = {
            strings : ["Do you have a Decentralized Identity(DID)?"],
            typeSpeed : 100
        }

        header_typed.current = new Typed(header_el.current, options)

        return () => {
            header_typed.current.destroy()
        }
    }, [])

    return (
        <div id="intro" className="shadow-lg my-8 mx-24 px-4 py-8 rounded-md">
            <h1 className="font-mono font-bold text-4xl text-black text-center m-4" ref={header_el}/>
            <div className="flex flex-row justify-center items-center m-2 p-2 space-x-8">
                <p className="px-6 py-3 bg-green-600 rounded-md shadow-lg animate-pulse font-mono font-bold text-2xl text-white cursor-pointer">
                    <Link href="/enter-your-did">YES</Link>
                </p>
                <p className="px-6 py-3 bg-green-600 rounded-md shadow-lg animate-pulse font-mono font-bold text-2xl text-white cursor-pointer">
                    <Link href="/create-did">NO</Link>
                </p>
            </div>
        </div>
    )
}