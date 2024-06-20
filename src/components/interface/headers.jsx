import { CgMenuHotdog } from 'react-icons/cg'
import { Link } from 'react-scroll';

export default function Header() {
    return (
      <header className="shadow-lg shadow-black-100/50 top-0 fixed w-full z-10 bg-white font-bold h-20 md:flex hidden justify-center">
        <div className="flex justify-between my-auto w-11/12">
          <Link to="hero" smooth={true} duration={500}>
            <h1 className="text-3xl">Harold.dev</h1>
          </Link>
          <button className='flex md:hidden text-4xl text-black my-auto'>
            <CgMenuHotdog />
          </button>
          <ul className="gap-6 md:flex hidden flex-end text-xl">
            <li className='cursor-pointer'>
              <Link to="hero" smooth={true} duration={600} className='hover:text-blue-400'>
                Home
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link to="about" smooth={true} duration={600} className='hover:text-blue-400'>
                About
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link to="project" smooth={true} duration={600} className='hover:text-blue-400'>
                Projects
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link to="contact" smooth={true} duration={500} className='hover:text-blue-400'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    )
  }
