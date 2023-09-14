import { CiLinkedin } from 'react-icons/ci'
import { LuGithub } from 'react-icons/lu'

export default function Footer() {
  return(
    <footer className="darker py-10">
        <div className="flex w-8/12  mx-auto justify-between text-gray-400">
          <h2 className="font-extrabold my-auto">Copyright © 2023. All rights are reserved</h2>
          <div className='flex md:flex-row flex-col gap-2'>
            <a href='https://www.linkedin.com/in/harold-mudosa/' target='blank' className='hover:text-blue-500 lg:text-4xl text-2xl font-bold mx-auto'><CiLinkedin /></a>
            <a href='https://github.com/haroldmud' target='blank' className='hover:text-blue-500 lg:text-4xl text-2xl font-bold my-auto'><LuGithub /></a>
          </div>
        </div>
      </footer>
  )
}
