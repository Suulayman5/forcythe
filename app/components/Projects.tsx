import Image from "next/image"
import { Button } from "./Button"

const Projects = () => {
  return (
    <>
        <div className="py-14 md:py-24 bg-custom-gradient">
            <div className="max-w-[50rem] mx-auto bg-[url('https://forcythe.com/images/arc.svg')] md:bg-[url('https://forcythe.com/images/arc-L.svg')] bg-cover md:bg-contain bg-top bg-no-repeat ">
                <div className="pt-20 md:pt-52 pb-10 md:pb-20 max-w-xl mx-auto text-center px-5">
                    <div className="mb-14 md:mb-20 max-w-[19rem] md:max-w-md mx-auto">
                        <p className="text-xl md:text-3xl font-medium">We build solutions that help <span className="text-primary">businesses</span> of all sizes to <span className="text-primary">scale</span> </p>
                    </div>
                </div>
                <div className="flex justify-evenly items-center gap-3">
                    <div className="flex flex-col text-left w-fit">
                        <div className="text-[2rem] md:text-[3rem] font-medium text-primary">50+</div>
                        <span className="text-[15px] md:text-lg whitespace-nowrap max-w-full text-ellipsis">Client</span>
                    </div>
                    <div className="flex flex-col text-left w-fit">
                        <div className="text-[2rem] md:text-[3rem] font-medium text-primary">120+</div>
                        <span className="text-[15px] md:text-lg whitespace-nowrap max-w-full text-ellipsis">Projects</span>
                    </div>
                    <div className="flex flex-col text-left w-fit">
                        <div className="text-[2rem] md:text-[3rem] font-medium text-primary">10+</div>
                        <span className="text-[15px] md:text-lg whitespace-nowrap max-w-full text-ellipsis">Team Leads</span>
                    </div>
                    <div className="flex flex-col text-left w-fit">
                        <div className="text-[2rem] md:text-[3rem] font-medium text-primary">10+</div>
                        <span className="text-[15px] md:text-lg whitespace-nowrap max-w-full text-ellipsis">Glorious Years</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="my-20 md:mb-24 px-4 md:px-20">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-12">
                {/* Heading Section */}
                <div className="text-left">
                    <p className="text-[2.2rem] md:text-[2.6rem] leading-tight mb-4 md:mb-8"> Read our articles,bnews and product blog</p>
                </div>

                {/* <!-- Button Section --> */}
                <div className="relative w-fit ">
                    <span className="action-button custom-animate py-2 px-5 flex gap-2 items-center justify-center bg-white text-black text-base font-semibold group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md rounded-full transition-all duration-300 ease-in-out">
                        Read More
                    </span>
                    <div className="absolute inset-1 z-0 rounded-full border-4 border-dashed border-transparent group-hover:border-[#964386] transition-all duration-300"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden group hover:shadow-sm hover:shadow-primary transition-all duration-500">
                    <div className="md:h-60 min-h-56 relative mb-6">
                        <div className="bg-primary z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.6rem] animate-pulse"></div>
                        <Image
                            src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992357%2FWill_AI_take_over_cc9401fe38.jpg&w=1920&q=75"
                            width={2000} height={20}
                            alt="image"
                            className="transition-transform duration-500 transform group-hover:scale-110"
                        />
                    </div>
                    <div className="pl-5 relative before:absolute before:w-[1px] before:bg-white before:top-[50%] before:-translate-y-[50%] group-hover:scale-95 group-hover:translate-x-4 transition-all duration-500">
                        <p className="text-lg font-semibold mb-1">Blog</p>
                        <div className="text-gray-600 flex items-center mb-6">
                            <span>The Reformist</span>
                            <div className="h-2 w-2 rounded-full bg-white mx-[6px]"></div>
                            <span>May 29th, 2024</span>
                        </div>
                        <p className="text-xl md:text-2xl font-semibold line-clamp-2">Will AI take over Art?</p>
                    </div>
                </div>
                <div className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden group hover:shadow-sm hover:shadow-primary transition-all duration-500">
                    <div className="md:h-60 min-h-56 relative mb-6">
                        <div className="bg-primary z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.6rem] animate-pulse"></div>
                        <Image
                            src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716992003%2FCryptocurrency_vs_token_f8865950e7.jpg&w=1920&q=75"
                            width={1000} height={20}
                            alt="image"
                            className="transition-transform duration-500 transform group-hover:scale-110"
                        />
                    </div>
                    <div className="pl-5 relative before:absolute before:w-[1px] before:bg-white before:top-[50%] before:-translate-y-[50%] group-hover:scale-95 group-hover:translate-x-4 transition-all duration-500">
                        <p className="text-lg font-semibold mb-1">Blog</p>
                        <div className="text-gray-600 flex items-center mb-6">
                            <span>The Reformist</span>
                            <div className="h-2 w-2 rounded-full bg-white mx-[6px]"></div>
                            <span>May 29th, 2024</span>
                        </div>
                        <p className="text-xl md:text-2xl font-semibold line-clamp-2">Will AI take over Art?</p>
                    </div>
                </div>
                <div className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden group hover:shadow-sm hover:shadow-primary transition-all duration-500">
                    <div className="md:h-60 min-h-56 relative mb-6">
                        <div className="bg-primary z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.6rem] animate-pulse"></div>
                        <Image
                            src="https://forcythe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdhahjsrtn%2Fimage%2Fupload%2Fv1716991585%2FCryptocurrency_and_crypto_assets_da92d172fc.jpg&w=1920&q=75"
                            width={1000} height={20}
                            alt="image"
                            className="transition-transform duration-500 transform group-hover:scale-110"
                        />
                    </div>
                    <div className="pl-5 relative before:absolute before:w-[1px] before:bg-white before:top-[50%] before:-translate-y-[50%] group-hover:scale-95 group-hover:translate-x-4 transition-all duration-500">
                        <p className="text-lg font-semibold mb-1">Blog</p>
                        <div className="text-gray-600 flex items-center mb-6">
                            <span>The Reformist</span>
                            <div className="h-2 w-2 rounded-full bg-white mx-[6px]"></div>
                            <span>May 29th, 2024</span>
                        </div>
                        <p className="text-xl md:text-2xl font-semibold line-clamp-2">Will AI take over Art?</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-10 mt-20 px-4 md:px-20 text-center bg-[#071626] bg-opacity-0 bg-custom2-gradient">
            <div className="mx-auto max-w-[45rem]">
                <p className="text-[2rem] leading-[2.5rem] md:text-[2.6rem] mb-6 md:leading-[3rem] ">
                    <span className="text-primary">Ready to scale?</span> <br />
                    &quot;Join successful brands that chose us as their&quot; <span className="text-primary"> growth accelerator</span>
                </p>
                <Button text="Book a Call"/>
            </div>
        </div>

    </>
  )
}

export default Projects