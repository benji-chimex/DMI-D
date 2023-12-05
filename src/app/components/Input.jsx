"use client"

import { Web5 } from "@web5/api"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Typed from "typed.js"

export default function Input () {
    const header_el = useRef(null)
    const header_typed = useRef(null)

    const [DID, setDID] = useState("")
    const [DIDLink, setDIDLink] = useState("")
    const [view, setView] = useState(true)

    useEffect(() => {
        const options = {
            strings : ["Enter your Decentralized Identity(DID)?"],
            typeSpeed : 100
        }

        header_typed.current = new Typed(header_el.current, options)

        return () => {
            header_typed.current.destroy()
        }
    }, [])

    const handleChange = e => {
        e.preventDefault()

        setDID(e.target.value)
        console.log("DID", DID)
    }

    const handleClick = async e => {
        e.preventDefault()

        const { _, did } = await Web5.connect(DID)
        console.log("DID", did)

        setDIDLink(`https://dev.uniresolver.io/#${did}`)
        setView(false)
    }

    return (
        <div id="intro" className="shadow-lg my-8 mx-24 px-4 py-8 rounded-md">
            <h1 className="font-mono font-bold text-4xl text-black text-center m-4" ref={header_el}/>
            <div className="flex justify-stretch items-center m-2 py-2 px-16">
                <input onChange={handleChange} type="text" placeholder="Enter your DID........" className="w-full bg-gray-200 shadow-inner p-4 font-mono font-bold text-xl text-black rounded-md"/>
            </div>
            {view ? <div className="flex justify-center items-center m-2 p-2">
                <button onClick={handleClick} className="px-6 py-3 bg-green-600 rounded-md shadow-lg animate-pulse font-mono font-bold text-2xl text-white cursor-pointer">RESOLVE</button>
            </div> :
            <div className="flex flex-row justify-center items-center m-2 p-2 space-x-8">
                <p className="px-6 py-3 bg-green-600 rounded-md shadow-lg animate-pulse font-mono font-bold text-2xl text-white cursor-pointer">
                    <Link href={DIDLink} target="_blank">View your DID Document</Link>
                </p>
                <p className="px-6 py-3 bg-green-600 rounded-md shadow-lg animate-pulse font-mono font-bold text-2xl text-white cursor-pointer">
                    <Link href="/records">View Records</Link>
                </p>
            </div>}
        </div>
    )
}