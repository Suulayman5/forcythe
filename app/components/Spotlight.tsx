"use client"

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Spotlight = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)
    const data = [
        {name: 'Idea', title: "Your vision is unique.", message: "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it." },
        {name: 'Design', title: "Crafting the blueprint for success", message: "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality." },
        {name: 'Develop', title: "Turning blueprints into reality.", message: "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life." },
        {name: 'Launch', title: "Your launchpad to the market.", message: "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition." },
    ]

    const handleClick = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close the div if clicked again
        } else {
            setActiveIndex(index); // Open the clicked div
        }
    }
  return (
    <>
    <div className="flex flex-col px-8 md:px-28 py-20">
        <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                From <span className="text-primary">Spark</span> to <span className="text-primary">Spotlight</span>: <br />
                we take you every step of the way to success.
            </h1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex mb-8 basis-1/2">
            <div className="md:pr-10 w-screen md:w-full">
                    <div className="border-2 border-blue-200 mb-12 rounded-full grid grid-cols-4 p-3.5 gap-1">
                        {data.map((spot, index) => (
                            <div key={index} 
                            className={`overflow-hidden px-2 md:px-3 py-3 md:py-3.5 rounded-full text-center cursor-pointer transition-all duration-300 hover: hover:
                            ${activeIndex === index ? 'bg-blue-200 text-black' : ''}`}
                            onClick={() => handleClick(index)} 
                            >{spot.name}</div>
                        ))}
                    </div>
                    <div className="">
                        {data.map((spot, index) => (
                            activeIndex === index && (
                                <div key={index}>
                                    <div className="text-3xl md:text-4xl font-bold mb-10 md:mb-14">{spot.title}</div>
                                    <div className="text-white leading-8 mb-6 md:mb-10">{spot.message}</div>
                                    <div className="relative w-fit">
                                        <button className="w-fit py-[12px] px-5  flex gap-2 items-center justify-center rounded-full bg-white text-base text-black relative z-10 font-semibold hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md">Book a Call <ArrowRight className="w-10 h-10"/></button>
                                        <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
                                    </div> 

                                </div>
                            )
                        ))}
                    </div>
                    
            </div>
            </div>
            <div className="w-fit h-fit">
                <Image src='https://forcythe.com/images/camera-man.svg' width={500} height={50} alt='image'/>
            </div>
        </div>
    </div>
    <div className="bg-custom1-gradient py-14">
        <div className="flex flex-col mb-10 mx-8 md:mx-20">
            <h2 className="text-3xl md:text-5xl mb-10 md:mb-16 text-center text-blue-300">
            Your best call for B2B/B2C product innovation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md: mx-10">
                <div className="bg-[#08172aa8] rounded-2xl">
                    <div className="p-9">
                        <div className="bg-blue-600 w-fit p-2 rounded-lg mb-6">
                            <Image src='https://forcythe.com/images/layers-three.svg' width={24} height={10} alt='cost icon'/>
                        </div>
                        <p className="mb-5 text-[1.6rem] font-bold">Experience</p>
                        <p className="leading-7 text-lg text-gray-400">Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.</p>
                    </div>
                </div>
                <div className="bg-[#030c18a8] rounded-2xl">
                    <div className="p-9">
                        <div className="bg-blue-600 w-fit p-2 rounded-lg mb-6">
                            <Image src='https://forcythe.com/images/layers-three.svg' width={24} height={10} alt='cost icon'/>
                        </div>
                        <p className="mb-5 text-[1.6rem] font-bold">Quick Support</p>
                        <p className="leading-7 text-lg text-gray-400">We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.</p>
                    </div>
                </div>
                <div className="bg-[#08172aa8] rounded-2xl">
                    <div className="p-9">
                        <div className="bg-blue-600 w-fit p-2 rounded-lg mb-6">
                            <Image src='https://forcythe.com/images/layers-three.svg' width={24} height={10} alt='cost icon'/>
                        </div>
                        <p className="mb-5 text-[1.6rem] font-bold">Cost Savings</p>
                        <p className="leading-7 text-lg text-gray-400">Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Spotlight