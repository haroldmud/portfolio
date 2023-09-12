
export default function About() {
  return(
    <section className="max-w-[80rem] mt-16 flex flex-col  justify-center mx-auto w-full">
          <div className="lg:flex grid gap-8 lg:px-14 px-4"> 
          <h1 className="text-blue-400 text-2xl lg:mb-6 block lg:hidden">ABOUT ME</h1> 
            <div className="mx-auto h-fit my-auto lg:w-[50%]">
              <img className="lg:rounded-[3rem] rounded-lg" src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp" alt="" />
            </div>
            <div className="my-auto lg:w-[50%] grid gap-4">
              <h1 className="text-blue-400 text-2xl lg:block hidden">ABOUT ME</h1>
              <h2 className="lg:text-4xl text-2xl font-bold">A passionate Software Developer with a strong foundation in web development.</h2>
              <div className=" text-gray-400 lg:text-xl">
                <p >
                My skill set includes proficiency in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I specialize in creating and maintaining responsive websites that deliver exceptional user experiences.
                </p>
                <p>
                 My approach centers on crafting dynamic, engaging interfaces by adhering to best practices and writing clean, optimized code. I'm always up-to-date with the latest development tools and techniques, ensuring that I can employ cutting-edge solutions to meet project goals.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}