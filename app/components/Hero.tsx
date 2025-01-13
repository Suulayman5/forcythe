import { Button } from "./Button";

const Hero = () => {
    return (
      <section className="max-w-[80rem] md:w-screen bg-white mx-4 w-fit md:mx-24 bg-opacity-10 p-5 py-8 max-h-[900px] md:p-8 lg:p-10 rounded-[2rem] sm:rounded-[3rem]">
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
            <Button text="Book a Call"/>
            
        </div>
      </section>
    );
  };
  
  export default Hero;
  