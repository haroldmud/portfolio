import { CgMenuHotdog } from 'react-icons/cg'
export default function Header() {
  return(
    <header className="shadow-lg shadow-black-100/50 top-0 fixed w-full z-10 bg-white font-bold h-20 flex justify-center">
      <div className="flex justify-between my-auto w-11/12">
        <a href='#hero'>
          <h1 className="text-3xl">Harold.dev</h1>
        </a>
        <button className='flex md:hidden text-4xl text-black my-auto'>
          <CgMenuHotdog />
        </button>
        <ul className="gap-6 md:flex hidden flex-end text-xl">
          <li>
            <a className='hover:text-blue-400' href="#hero">
            Home
            </a>
          </li>
          <li>
            <a className='hover:text-blue-400' href="#about">
              About
            </a>
          </li>
          <li>
            <a className='hover:text-blue-400' href="#project">
            Projects
            </a>
          </li>
          <li>
            <a className='hover:text-blue-400' href="#contact">
            Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
