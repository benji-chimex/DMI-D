import SearchIcon from "@iconscout/react-unicons/icons/uil-search-alt"

export default function SearchBar() {
    return (
        <div id="search-bar" className="flex flex-row items-center justify-between bg-gray-200 shadow-inner w-full p-2 rounded-md">
            <div className="flex flex-row justify-start items-center justify-self-start space-x-2">
                <div className="flex justify-center items-center animate-pulse">
                    <SearchIcon size={30} color="#000"/>
                </div>
                <div className="flex justify-center items-center">
                    <span className="font-mono font-bold text-lg text-black">Search Records....</span>
                </div>
            </div>
        </div>
    )
}