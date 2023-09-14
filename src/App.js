import Header from "./components/interface/headers";
import HeaderMob from "./components/interface/headermob";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";
import Footer from "./components/interface/footer";
import Portfolio from "./components/sections/Project/portfolio";
import Contact from "./components/sections/contact";

function App() {
  return (
    <section className="">
      <Header />
      <HeaderMob />
      <section id="hero" className="bg-slate-100 pb-32">
        <section className="md:pt-40 pt-12 max-w-[80rem] mx-auto">
          <Hero />
        </section>
      </section>
      <section id="about" className="lg:py-32 pb-20">
        <About />
      </section>
      <section id="project" className="bg-slate-100 pb-32">
        <Portfolio />
      </section>
      <Contact />
      <Footer/>
    </section>
  );
}

export default App;
