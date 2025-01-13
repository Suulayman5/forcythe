import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
        <div className='py-10 px-8 md:px-28'>
            <div className="md:grid md:grid-cols-3 my-10">
                <div className="max-w-lg mb-10 md:mb-0">
                    <div className="w-full grid grid-cols-4">
                        <input type="text" className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]" placeholder='Your Email Address' />
                        <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white rounded-e-full text-sm font-medium border border-t-0 border-white">Subscribe</button>
                    </div>
                <div className="flex gap-3 mt-5 items-center">
                    <div className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
                        <div className="bd-white rounded-full w-2 h-2"></div>
                        <input type="checkbox" className='hidden' id='terms'/>
                    </div>
                    <label htmlFor="terms" className='text-sm cursor-pointer'>I agree to receive other notification from Forcythe</label>
                </div>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
                <div className="md:pl-14 md:col-span-2 md:pr-10">
                        <Image src="https://forcythe.com/images/forcythe%20logo.svg" width={130} height={9} alt="logo" className='mb-5 md:mb-8'/>
                    <p className="text-gray-400 leading-6 font-normal">
                        We are the growth company for businesses looking to scale. We are dedicated to transforming businesses with bespoke digital solutions that drive growth.    
                    </p>
                    <div className="mt-10 hidden md:flex items-center gap-2">
                        <Link href="https://www.facebook.com/forcythe" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>
                            <Image src="https://forcythe.com/images/facebook.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                        <Link href="https://www.instagram.com/forcythe" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>                        
                            <Image src="https://forcythe.com/images/instagram.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                        <Link href="https://twitter.com/forcythe_" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>                        
                            <Image src="https://forcythe.com/images/x.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                        <Link href="https://www.linkedin.com/company/forcythe" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>                        
                            <Image src="https://forcythe.com/images/linkedin.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                        <Link href="https://www.youtube.com/@forcythe" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>                        
                            <Image src="https://forcythe.com/images/youtube.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                        <Link href="https://podcasters.spotify.com/pod/show/the-future-insight" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>                        
                            <Image src="https://forcythe.com/images/Icon.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                    </div>
                </div>
                <div className="md:pl-10">
                    <p className="mb-8 text-2xl font-bold">Company</p>
                    <ul className="flex flex-col gap-2">
                        <li className="text-base text-primary font-medium">
                            <Link href='#'>About</Link>
                        </li>
                        <li className="text-base text-primary font-medium">
                            <Link href='#'>Services</Link>
                        </li>
                        <li className="text-base text-primary font-medium">
                            <Link href='#'>Portfolio</Link>
                        </li>
                        <li className="text-base text-primary font-medium">
                            <Link href='#'>Studio</Link>
                        </li>
                        <li className="text-base text-primary font-medium">
                            <Link href='#'>Foundation</Link>
                        </li>
                        <li className="text-base text-primary font-medium">
                            <Link href='#'>Career</Link>
                        </li>
                        <li className="text-base text-primary font-medium">
                            <Link href='#'>Blog</Link>
                        </li>
                    </ul>
                    <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
                        <Link href="https://www.facebook.com/forcythe" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>
                            <Image src="https://forcythe.com/images/facebook.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                        <Link href="https://www.instagram.com/forcythe" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>                        
                            <Image src="https://forcythe.com/images/instagram.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                        <Link href="https://twitter.com/forcythe_" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>                        
                            <Image src="https://forcythe.com/images/x.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                        <Link href="https://www.linkedin.com/company/forcythe" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>                        
                            <Image src="https://forcythe.com/images/linkedin.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                        <Link href="https://www.youtube.com/@forcythe" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>                        
                            <Image src="https://forcythe.com/images/youtube.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                        <Link href="https://podcasters.spotify.com/pod/show/the-future-insight" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#064386] flex justify-center items-center'>                        
                            <Image src="https://forcythe.com/images/Icon.svg" width={20} height={20} alt='facebook logo'/>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        <div className="border-t-[1px] border-primary mt-10">
            <p className="text-primary text-sm mt-5 text-center md:text-left">
                Copyright © 2024 Forcythe. All rights reserved.
            </p>
        </div>
        </div>
  )
}

export default Footer