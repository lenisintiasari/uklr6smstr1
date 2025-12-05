"use client"
import React, { ReactNode, useState } from "react"
import { menuItem } from "./menu"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
    children: ReactNode
}
const MainTemplate = (Props: Props) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const currentAddress = usePathname()
    return (
        <div>

            {/* sidebar + header*/}
            <div className={`min-h-dvh w-1/2 md:w-1/3 lg:w-1/4 bg-pink-500 fixed top-0 right-full transform transition-transform ease-in-out ${isShow ? 'left-0' : `-translate-x-full`}`}>
                {/*toggle sidebar*/}
                <div className="w-full p-4 flex justify-between items-start ">
                    <h1 className="font-bold text-lg">DIGITAL LIBRARY</h1>
                    <button type="button" onClick={() => setIsShow(false)} className="font-bold">
                        &times;
                    </button>
                </div>
                {/*display menu item*/}
                <div className="w-full p-3 flex flex-col gap-2">

                    {
                        menuItem.map((menuItem, index) => (
                            <Link href={menuItem.destination} key={`menu-${index}`}>
                                <button type="button" className={`w-full rounded text-start py-2 px-3 font-semibold ${currentAddress === menuItem.destination ? `bg-white text-pink-500` : `text-black`}`}>
                                    {menuItem.label}
                                </button>
                            </Link>
                        ))
                    }
                </div>
            </div>

            {/*header section*/}
            <div className="w-full bg-pink-600 p-3 ">
                <button type="button" onClick={() => setIsShow(true)} className="font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>

                </button>
            </div>

            {/*main content*/}
            {Props.children}
            {/*footer*/}
        </div>
    )
}
export default MainTemplate