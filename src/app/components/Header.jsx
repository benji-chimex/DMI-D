import Link from "next/link"
import med_share from "../../../public/med-share.jpg"
import SearchBar from "./SearchBar"
import Image from "next/image"

export default function Header() {
    return (
        <div id="header" className="flex flex-row bg-white items-center shadow-lg h-1/12 p-2 space-x-8">
            <div className="basis-1/4 flex flex-row justify-start items-center cursor-pointer">
                <Image src={med_share} alt="MED-SHARE" width={140} height={70}/>
            </div>
            <div className="basis-1/4 flex flex-row justify-stretch items-center cursor-pointer">
                <SearchBar/>
            </div>
            <div className="basis-1/2 flex flex-row justify-stretch items-center">
                <div className="basis-1/5 flex-row justify-center items-center cursor-pointer">
                    <span className="font-mono font-bold text-xl hover:animate-pulse text-center text-black hover:text-green-600">
                        <Link href="/">HOME</Link>
                    </span>
                </div>
                <div className="basis-1/5 flex-row justify-center items-center cursor-pointer">
                    <span className="font-mono font-bold text-xl hover:animate-pulse text-center text-black hover:text-green-600">
                        <Link href="/records">RECORDS</Link>
                    </span>
                </div>
                <div className="basis-1/5 flex-row justify-center items-center cursor-pointer">
                    <span className="font-mono font-bold text-xl hover:animate-pulse text-center text-black hover:text-green-600">
                        <Link href="/access">ACCESS</Link>
                    </span>
                </div>
                <div className="basis-1/5 flex-row justify-center items-center cursor-pointer">
                    <span className="font-mono font-bold text-xl hover:animate-pulse text-center text-black hover:text-green-600">
                        <Link href="/about">ABOUT</Link>
                    </span>
                </div>
                <div className="basis-1/5 flex-row justify-center items-center cursor-pointer">
                    <span className="font-mono font-bold text-xl hover:animate-pulse text-center text-black hover:text-green-600">
                        <Link href="/contact">CONTACT</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}