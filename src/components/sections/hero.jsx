import { LuGithub } from 'react-icons/lu'
import { CiLinkedin } from 'react-icons/ci'

export default function Hero() {
  return(
    <section className="mt-16 flex flex-col  justify-center mx-auto w-full">
          <div className="flex md:flex-row flex-col-reverse justify-between md:gap-0 gap-8 md:px-2 px-2">  
            <div className="md:w-6/12 mx-auto h-fit my-auto flex flex-col gap-8">
              <h1 className="md:text-6xl text-5xl font-bold">Full-Stack Software Developer <span className="inline-block"><img className="w-14" src="/icons/wave.png" alt="" /></span></h1>
              <p className="text-xl">Hi, I'm Arnold Mudosa. A passionate Software Developer based in Kigali, Rwanda.📍</p>
              <div className='flex gap-2'>
                <a href='https://www.linkedin.com/in/harold-mudosa/' target='blank' className='hover:text-blue-500 text-3xl'><CiLinkedin /></a>
                <a href='https://github.com/haroldmud' target='blank' className='hover:text-blue-500 text-2xl my-auto'><LuGithub /></a>
              </div>
            </div>
            <div className="hero-img mx-auto"></div>
          </div>
          <div className="flex md:flex-row flex-col gap-4 mx-auto mt-20">
            <h2 className="my-auto mx-auto">Frontend Stack</h2>
            <span className="md:border-l mx-auto border-b md:h-12 md:w-auto w-20 border-slate-400 md:mb-0 mb-4"></span>
            <div className="md:flex grid grid-cols-2 gap-8 my-auto">
              <img className="md:w-24 w-32" src="https://skillicons.dev/icons?i=html,css" alt="html and css" />
              <img className="md:w-24 w-32" src="https://skillicons.dev/icons?i=js,ts" alt="js and ts" />
              <img className="md:w-24 w-32" src="https://skillicons.dev/icons?i=react,next" alt="react and next" />
              <img className="md:w-24 w-32" src="https://skillicons.dev/icons?i=tailwind,scss" alt="sass and tailwind" />
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-4 mx-auto mt-10 md:pr-[11.8rem]">
            <h2 className="my-auto mx-auto">Backend Stack</h2>
            <span className="md:border-l mx-auto border-b md:h-12 md:w-auto w-20 border-slate-400 md:mb-0 mb-4"></span>
            <div className="md:flex grid grid-cols-2 gap-8 my-auto">
              <img className="md:w-12 md:h-12 w-24" src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="html and css" />
              <img className="md:w-12 md:h-12 w-24" src="https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png" alt="js and ts" />
              <img className="md:w-12 md:h-12 w-32" src="https://cdn.iconscout.com/icon/free/png-256/free-ruby-47-1175102.png?f=webp" alt="" />
              <img className="md:w-12 md:h-12 w-32" src="https://cdn.iconscout.com/icon/free/png-256/free-postgresql-11-1175122.png" alt="" />
            </div>
          </div>
        </section>
  )
}