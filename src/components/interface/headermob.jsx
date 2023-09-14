import { CgMenuHotdog } from 'react-icons/cg'
import { useState } from 'react'

export default function HeaderMob() {
  const [on, setOn] = useState(false);
  function handleOn() {
    setOn(prev => !prev)
  }
  return(
    <header className="shadow-lg shadow-black-100/50 top-0 fixed w-full z-10 bg-white font-bold h-20 flex md:hidden justify-center">
      <div className="flex justify-between my-auto w-11/12">
        <a href='#hero'>
          <h1 className="text-3xl">Harold.dev</h1>
        </a>
        <button onClick={handleOn} className='flex md:hidden text-4xl text-black my-auto'>
          <CgMenuHotdog />
        </button>
      </div>
        <ul className={`${on ? 'grid' : 'hidden'} absolute top-20 bg-white pb-4 w-full  gap-6 text-xl px-8`}>
          <li>
            <a onClick={handleOn} className='hover:text-blue-400' href="#hero">
            Home
            </a>
          </li>
          <li>
            <a onClick={handleOn} className='hover:text-blue-400' href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={handleOn} className='hover:text-blue-400' href="#project">
            Projects
            </a>
          </li>
          <li>
            <a onClick={handleOn} className='hover:text-blue-400' href="#contact">
            Contact
            </a>
          </li>
        </ul>
    </header>
  )
}
