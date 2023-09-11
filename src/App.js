import Header from "./components/sections/headers";
import Hero from "./components/sections/hero";

function App() {
  return (
    <section className="">
      <Header />
      <section className="bg-slate-100 pb-32">
        <Hero />
      </section>
      <section className="mx-auto max-w-[80rem]  lg:mt-20 mt-[23rem] md:px-2">
      <div className="flex mx-auto border px-4">  
            <div className="mx-auto h-fit my-auto flex flex-col gap-8">
              <img className="" src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="computer" />
            </div>
            <div className="flex flex-col gap-4 mx-auto mt-20 w-9/12">
              <h2 className="text-blue-500 font-bold text-2xl">ABOUT ME</h2>
              <h3>passionate Junior Full-Stack Developer with a strong foundation in web development</h3>
              <div>
                <p>
                My skill set includes proficiency in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I specialize in creating and maintaining responsive websites that deliver exceptional user experiences. My approach centers on crafting dynamic, engaging interfaces by adhering to best practices and writing clean, optimized code. I'm always up-to-date with the latest development tools and techniques, ensuring that I can employ cutting-edge solutions to meet project goals.
                </p>
                <p>
                In addition to my technical skills, I thrive in collaborative environments and enjoy working with cross-functional teams. Together, we can bring outstanding web applications to life, pushing the boundaries of what's possible in web development. If you're looking for a dedicated Front-End Developer to enhance your project, I'd love to connect and discuss how I can contribute to your team's success.
                </p>
            </div>
          </div>
          </div>
      </section>
      In addition to my technical skills, I thrive in collaborative environments and enjoy working with cross-functional teams. Together, we can bring outstanding web applications to life, pushing the boundaries of what's possible in web development. If you're looking for a dedicated Front-End Developer to enhance your project, I'd love to connect and discuss how I can contribute to your team's success.
    </section>
  );
}

export default App;
