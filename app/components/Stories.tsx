"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const Stories = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const storiesData = [
        { title: "Starks Associate", description: "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.", image: "https://forcythe.com/images/john.svg", icon: "https://forcythe.com/images/starks.svg", name: "Starks", position: "John, Management" },
        { name: "https://forcythe.com/images/ExecutivePros%20Logo.svg", title: "Testimony, Co-founder", description: "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!", image: "https://forcythe.com/images/executive-pro-ceo.svg", position: "Testimony, Co-founder" },
        { name: "https://forcythe.com/images/stacai.svg", title: "Edwin, Former CTO", description: "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.", image: "https://forcythe.com/images/edwin.svg", position: "Edwin, Former CTO" },
        { name: "https://forcythe.com/images/iwaria.svg", title: "Iwaria, Founder", description: "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.", image: "https://forcythe.com/images/iwaria-founder.svg", position: "Iwaria, Founder" },
        { name: "https://forcythe.com/images/Beaupreneur.svg", title: "Christiana, Founder ", description: "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.", image: "https://forcythe.com/images/christina.svg", position: "Christiana, Founder" },
    ];

    // Function to handle the rendering div click
    const handleClick = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null); // Close the div if clicked again
        } else {
            setActiveIndex(index); // Open the clicked div
        }
    }

    // useEffect to switch active index every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex !== null ? (prevIndex + 1) % storiesData.length : 0)); // Cycle through the stories data
        }, 10000); 

        return () => clearInterval(interval); // Cleanup the interval when the component unmounts
    }, [storiesData.length]); // Include storiesData.length in the dependency array

    return (
        <div className="flex flex-col mb-10 mx-8 md:mx-28">
            <div className="text-[2.2rem] leading-[2.5rem] md:text-[2.6rem]  md:leading-[3.5rem]  mb-12 max-w-4xl mx-auto text-center">
                <p className="">Discover the <span className="text-primary">transformative stories</span> of startups that scaled new heights with us</p>
            </div>
            <div className="w-full overflow-x-scroll scroll-smooth">
                <div className="w-full border-[1px] border-[#06438c] rounded-full grid grid-cols-5 min-w-[750px]">
                    {storiesData.map((story, index) => (
                        <div 
                            key={index} 
                            className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300 
                                ${activeIndex === index ? 'bg-[#081d33]' : ''}`}
                            onClick={() => handleClick(index)}  // Set active index on click
                        >
                            <div className="w-fit h-full mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                                {/* Render the icon and name for Starks */}
                                {story.name === "Starks" && story.icon ? (
                                    <>
                                        <Image src={story.icon} width={20} height={40} alt="Starks Icon" />
                                        <span className="ml-2">{story.name}</span>
                                    </>
                                ) : (
                                    // Render the name as an image if URL is provided
                                    story.name && story.name.startsWith("https://") ? (
                                        <Image src={story.name} width={100} height={40} alt="Logo" />
                                    ) : (
                                        <span>{story.name}</span>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {storiesData.map((story, index) => (
                activeIndex === index && (
                    <div key={index} className="mt-5 w-full md:w-[50%]  rounded-[1.8rem] flex md:flex-row flex-col md:p-5 p-7 bg-[#081d33]">
                        <div className="pr-3 md:w-1/2">
                            <div className="font-bold mb-3">{story.title}</div>
                            <div className="leading-7 mb-3">{story.description}</div>
                            <div className="font-bold mb-3">{story.position}</div>
                        </div>
                        <div className=" w-auto h-auto object-top md:mt-3 mt-0 ">
                            <div className="z-0 w-full h-full top-0 left-0 bg-opacity-10 animate-pulse rounded-xl">
                                <Image src={story.image} width={400} height={0} alt="image" className="w-[100%] h-[100%] object-fill inset-0 bg-cover "/>
                            </div>
                        </div>
                    </div>
                )
            ))}
        </div>
    )
}

export default Stories
