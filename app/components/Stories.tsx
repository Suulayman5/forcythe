"use client"

import Image from "next/image"
import { useState } from "react"
const Stories = () => {
    const [active, setActive] = useState(false)

    const activated = ()=>[
        setActive(!active)

    ]
  return (
    <div className="flex flex-col mx-8 md:mx-20">
        <div className=" flex justify-center items-center mt-8 md:mt-16 mx-12 md:mx-24 min-h-[60px] mb-8 ">
            <p className="text-[2.6rem]">Discover the <span className="text-primary">transformative stories</span> of startups that scaled new heights with us</p>
        </div>
        <div className="w-full border-[1px] border-[#06438c] rounded-full grid grid-cols-5 min-w-[750px] overflow-scroll">
            <div className="flex w-full p-[1.1rem] hover:bg-[#06438c] cursor-pointer transition-all duration-300">
                <div className="w-fit h-full mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                    <Image src="https://forcythe.com/images/starks.svg" width={20} height={10} alt="logo"/>
                    <span>Starks</span>
                </div>
            </div>
            <div className="w-full p-[1.1rem] cursor-pointer hover:bg-[#06438c] transition-all duration-300">
                <div className="w-fit h-full mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                    <Image src="https://forcythe.com/images/ExecutivePros%20Logo.svg" width={150} height={10} alt="logo"/>
                </div>
            </div>
            <div className="w-full p-[1.1rem] cursor-pointer hover:bg-[#06438c] transition-all duration-300">
                <div className="w-fit h-full mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                    <Image src="https://forcythe.com/images/stacai.svg" width={150} height={10} alt="logo"/>
                </div>
            </div>
            <div className="w-full p-[1.1rem] cursor-pointer hover:bg-[#06438c] transition-all duration-300">
                <div className="w-fit h-full mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                    <Image src="https://forcythe.com/images/iwaria.svg" width={150} height={10} alt="logo"/>
                </div>
            </div>
            <div className="w-full p-[1.1rem] cursor-pointer hover:bg-[#06438c] transition-all duration-300">
                <div className="w-fit h-full mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                    <Image src="https://forcythe.com/images/Beaupreneur.svg" width={200} height={10} alt="logo"/>
                </div>
            </div>
        </div>
        <div className="mt-5 w-full md:w-[40%] lg:[50%] rounded-[1.8rem] flex md:flex-row flex-col md:p-5 p-7 bg-[#06438c] md:relative">
            <div className="pr-3 md:w-1/2">
                <div className="font-bold mb-3">Starks Assciate</div>
                <div className="leading-7 mb-3">
                    Partnering with Forcythe was like finding a hidden gem. 
                    Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. 
                    They&apos;ve become more than a service provider; they&apos;re a trusted ally.
                </div>
                <div className="font-bold mb-3">
                    John, Management
                </div>
            </div>
            <div className="">
                <Image src="https://forcythe.com/images/john.svg" width={400} height={0} alt="image"/>
            </div>
        </div>
    </div>
  )
}

export default Stories