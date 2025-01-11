import Hero from "./components/Hero";
import Nabvbar from "./components/Nabvbar";

export default function Home() {
  return (
    <div className="">
      <Nabvbar/>
      <main className=" md:mt-[6.8]">
      <div
        className="bg-[url('https://forcythe.com/images/header-background.svg')] md:min-h-screen bg-no-repeat"
      >
      <Hero />
    </div>

      </main>
    </div>
  );
}
