import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Spotlight = () => {
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
                        <div className="overflow-hidden px-2 md:px-3 py-3 md:py-3.5 rounded-full text-center cursor-pointer transition-all duration-300 hover:bg-blue-200 hover:text-black">Idea</div>
                        <div className="overflow-hidden px-2 md:px-3 py-3 md:py-3.5 rounded-full text-center cursor-pointer transition-all duration-300 hover:bg-blue-200 hover:text-black">Design</div>
                        <div className="overflow-hidden px-2 md:px-3 py-3 md:py-3.5 rounded-full text-center cursor-pointer transition-all duration-300 hover:bg-blue-200 hover:text-black">Develop</div>
                        <div className="overflow-hidden px-2 md:px-3 py-3 md:py-3.5 rounded-full text-center cursor-pointer transition-all duration-300 hover:bg-blue-200 hover:text-black">Launch</div>
                    </div>
                    <div className="">
                        <div className="text-3xl md:text-4xl font-bold mb-6 md:mb-10">Your vision is unique.</div>
                        <div className="text-white leading-8 mb-6 md:mb-10">Nuture your idea into a blueprint for success with our strategic insights and 
                            industry expertise. Your vision is unique, let&apos;s us shape it.
                        </div>
                        <button className=" bg-white flex gap-2 text-dark rounded-3xl p-3 px-4 font-bold hover:bg-primary mb-8">
                            Book a Call <span><ArrowRight/></span>
                        </button> 
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