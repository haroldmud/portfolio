import { MdOutlineMarkEmailUnread } from "react-icons/md"
import { FaXTwitter } from 'react-icons/fa6'

export default function Contact() {
  return(
    <section id="contact" className="max-w-[80rem] my-16 flex flex-col  justify-center mx-auto w-full">
          <div className="grid gap-8 lg:px-14 px-8"> 
            <div className="my-auto lg:w-[50%]">
              <h1 className="text-blue-400 text-2xl">CONTACT ME</h1>
              <p className="">Link up with me through the following contact details:</p>
            </div>
            <div className="flex flex-col gap-4">
              <a href='mailto:haroldmudosa@gmail.com' arget="blank" className="flex gap-2">
                <MdOutlineMarkEmailUnread className="text-4xl text-red-400" />
                <h3  className="my-auto">haroldmudosa@gmail.com</h3>
              </a>
              <a href='https://twitter.com/MudosaHarold' target="blank" className="flex gap-2">
                <FaXTwitter className="text-4xl text-black" />
                <h3 className="my-auto">@MudosaHarold</h3>
              </a>
            </div>
          </div>
        </section>
  )
}