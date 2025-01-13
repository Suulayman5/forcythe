import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
      <section className="max-w-[80rem] md:w-screen bg-white  w-fit mx-8 md:mx-28 bg-opacity-10 p-5 py-8 max-h-[900px] md:p-8 lg:p-10 rounded-[2rem] sm:rounded-[3rem]">
        <div className="max-w-[56rem]">
            <div className="max-h-[180px]">
                <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
                     We build <br className="md:hidden"/><span className="text-primary">products</span> that shape a better future
                </h1>  
            </div>
            <div className="mb-8 max-w-3xl mt-16 md:mt-0">
                <p className="text-gray-400 md:text-lg mb-8 leading-7">
                     We&apos;re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation.
                </p>
            </div>
            <div className="relative w-fit">
              <button className="w-fit py-[12px] px-5  flex gap-2 items-center justify-center rounded-full bg-white text-base text-black relative z-10 font-semibold hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md">Book a Call <ArrowRight className="w-10 h-10"/></button>
              <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
            </div>      
        </div>
      </section>
    );
  };
  
  export default Hero;
  