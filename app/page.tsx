import Client from "./components/Client";
import Hero from "./components/Hero";
import Navbar from "./components/Nabvbar";
import Stories from "./components/Stories";

export default function Home() {
  return (
    <div className="">
          <Navbar/>
      <main className="mt-[6.3rem] md:mt-[6.8rem]">
       
      <div
        className="bg-[url('https://forcythe.com/images/header-background.svg')] my-10 md:min-h-screen bg-no-repeat"
      >
      <Hero />
      <Client/>
      <Stories/>
    </div>

      </main>
    </div>
  );
}
