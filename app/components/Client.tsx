import Image from "next/image"

const Client = () => {
  return (
    <div>
        <div className=" flex justify-center items-center mt-8 md:mt-16 px-8 md:px-28 min-h-[60px] mb-8 ">
            <h2 className="text-[2.5rem] ">Success in <span className="text-primary">Motion</span> -  our Client&apos;s Journey</h2>
        </div>
        <div className="flex flex-col relative overflow-hidden gap-5 bg-gradient-to-b from-transparent via-[rgba(3,5,22,0.6)] to-[rgb(3,5,22)]">
        <div className="flex animate-marquee">
            <Image src='https://forcythe.com/images/Project%20Images/stac.svg' width={400} height={300} alt="image"/>
            <Image src='https://forcythe.com/images/Project%20Images/activity.svg' width={400} height={300} alt="image"/>
            <Image src='https://forcythe.com/images/Project%20Images/exec-pro.svg' width={400} height={300} alt="image"/>
            <Image src='https://forcythe.com/images/Project%20Images/phone.svg' width={400} height={300} alt="image"/>
            <Image src='https://forcythe.com/images/Project%20Images/starks.svg' width={400} height={300} alt="image"/>
            <Image src='https://forcythe.com/images/Project%20Images/africaFund.svg' width={400} height={300} alt="image"/>
        </div>
        <div className="flex animate-marquee1">
            <Image src='https://forcythe.com/images/Project%20Images/stac.svg' width={400} height={300} alt="image"/>
            <Image src='https://forcythe.com/images/Project%20Images/activity.svg' width={400} height={300} alt="image"/>
            <Image src='https://forcythe.com/images/Project%20Images/exec-pro.svg' width={400} height={300} alt="image"/>
            <Image src='https://forcythe.com/images/Project%20Images/phone.svg' width={400} height={300} alt="image"/>
            <Image src='https://forcythe.com/images/Project%20Images/starks.svg' width={400} height={300} alt="image"/>
            <Image src='https://forcythe.com/images/Project%20Images/africaFund.svg' width={400} height={300} alt="image"/>
        </div>
        </div>
    </div>
  )
}

export default Client