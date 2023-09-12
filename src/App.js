import Header from "./components/sections/headers";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Footer from "./components/interface/footer";
import Trap from "./components/interface/trap";
import Portfolio from "./components/sections/Project/protfolio";
import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { FaXTwitter } from 'react-icons/fa6'

function App() {
  return (
    <section className="">
      <Header />
      <section className="bg-slate-100 pb-32">
        <section className="pt-40 max-w-[80rem] mx-auto">
          <Hero />
        </section>
      </section>
      <section className="lg:py-32 pb-20">
        <About />
        <Trap />
      </section>
      <section className="bg-slate-100 pb-32">
        <Portfolio />
      </section>
      <section className="max-w-[80rem] my-16 flex flex-col  justify-center mx-auto w-full">
          <div className="grid gap-8 lg:px-14 px-4"> 
            <div className="my-auto lg:w-[50%]">
              <h1 className="text-blue-400 text-2xl">CONTACT ME</h1>
              <p className="font-bold">Link up with me throught the following contact details:</p>
            </div>
            <div className="flex flex-col gap-4">
              <a href='mailto=haroldmudosa@gmail.com' className="flex gap-2">
                <MdOutlineMarkEmailUnread className="text-4xl text-red-400" />
                <h3  className="my-auto">haroldmudosa@gmail.com</h3>
              </a>
              <a href='https://twitter.com/MudosaHarold'className="flex gap-2">
                <FaXTwitter className="text-4xl text-black" />
                <h3 className="my-auto">@MudosaHarold</h3>
              </a>
            </div>
          </div>
        </section>
      <Footer/>
    </section>
  );
}

export default App;
