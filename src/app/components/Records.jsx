"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Typed from "typed.js"
import AngleDown from "@iconscout/react-unicons/icons/uil-angle-down"
import AngleUp from "@iconscout/react-unicons/icons/uil-angle-up"
import Archive from "@iconscout/react-unicons/icons/uil-archive"

export default function Records () {
    const header_el = useRef(null)
    const header_typed = useRef(null)

    const [localView, setLocalView] = useState(true)
    const [remoteView, setRemoteView] = useState(true)

    useEffect(() => {
        const options = {
            strings : ["Your Decentralized Web Nodes(DWNs) which store your medical records."],
            typeSpeed : 100
        }

        header_typed.current = new Typed(header_el.current, options)

        return () => {
            header_typed.current.destroy()
        }
    }, [])

    const handleClickI = async e => {
        e.preventDefault()

        localView ? setLocalView(false) : setLocalView(true)
    }

    const handleClickII = async e => {
        e.preventDefault()

        remoteView ? setRemoteView(false) : setRemoteView(true)
    }

    return (
        <div id="intro" className="shadow-lg my-8 mx-24 px-4 py-8 rounded-md">
            <h1 className="font-mono font-bold text-4xl text-black text-center m-4" ref={header_el}/>
            <div className="flex flex-row justify-between items-center m-2 p-2">
                <div className="flex flex-row justify-evenly items-center p-2 space-x-4">
                    <Archive size={30} color="#16a34a"/>
                    <h2 className="font-mono font-bold text-2xl text-black">Local DWN</h2>
                </div>
                <button className="p-2 cursor-pointer" onClick={handleClickI}>
                    {localView ? <AngleDown size={30} color="#000"/> : <AngleUp size={30} color="#000"/>}
                </button>
            </div>
            {!localView ? <div className="flex flex-col justify-center items-center m-2 p-8 space-x-4">
                <Archive size={72} color="#e5e7eb"/>
                <h2 className="font-mono font-bold text-2xl text-gray-200">No Records Found</h2>
            </div> : null}
            <div className="flex flex-row justify-between items-center m-2 p-2">
                <div className="flex flex-row justify-evenly items-center p-2 space-x-4">
                    <Archive size={30} color="#16a34a"/>
                    <h2 className="font-mono font-bold text-2xl text-black">Remote DWNs</h2>
                </div>
                <button className="p-2 cursor-pointer" onClick={handleClickII}>
                    {remoteView ? <AngleDown size={30} color="#000"/> : <AngleUp size={30} color="#000"/>}
                </button>
            </div>
            {!remoteView ? <div className="flex flex-col justify-center items-center m-2 p-8 space-x-4">
                <Archive size={64} color="#e5e7eb"/>
                <h2 className="font-mono font-bold text-2xl text-gray-200">No Records Found</h2>
            </div> : null}
            <div className="flex justify-center items-center m-2 p-2">
                <p className="px-6 py-3 bg-green-600 rounded-md shadow-lg animate-pulse font-mono font-bold text-2xl text-white cursor-pointer">
                    <Link href="/add-record">Add Record</Link>
                </p>
            </div>
        </div>
    )
}