import Client from "./components/Client";
import Hero from "./components/Hero";
import Navbar from "./components/Nabvbar";
import Projects from "./components/Projects";
import Spotlight from "./components/Spotlight";
import Stories from "./components/Stories";

export default function Home() {
  return (
    <div className="">
          <Navbar/>
      <main className="mt-[6.3rem] w-full md:mt-[6.8rem]">
       
      <div
        className="bg-[url('https://forcythe.com/images/header-background.svg')] my-10 md:min-h-screen bg-no-repeat bg-top"
      >
      <Hero />
      <Client/>
      </div>
      <div className="">
      <Stories/>
      <Spotlight/>
      <Projects/>
      </div>

      </main>
    </div>
  );
}
