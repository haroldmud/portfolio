import { MdOutlineConnectedTv } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'

export default function Project(props) {
  return(
    
            <section className="grid lg:gap-12 gap-6 mt-10">
              <div className="flex lg:flex-row flex-col bg-slate-50 shadow lg:rounded-2xl rounded-lg p-8">
                <div className="relative group">
                  <img className="lg:rounded-2xl rounded-lg shadow-md shadow-slate-500/50" src={props.image1} alt="website" />
                  <div className="absolute group-hover:block hidden top-0 dark h-full w-full lg:rounded-2xl rounded-lg">
                    <div className="lg:rounded-2xl rounded-lg h-full flex justify-center">
                      <div className="my-auto flex gap-4 text-white lg:text-4xl text-2xl">
                        <a href={props.demo1} target="blank" className=""><span className={`${props.demo} inline-block ml-1 hover:text-blue-300`}><MdOutlineConnectedTv/></span></a>
                        <a href={props.code1} target="blank"><span className="inline-block ml-1 hover:text-blue-300"><FaLaptopCode /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:text-center my-auto grid lg:gap-8 gap-4 lg:mt-auto mt-6">
                  <h2 className="lg:text-4xl text-2xl font-bold">{props.project1}</h2>
                  <p className="text-gray-400 lg:text-xl lg:px-10">{props.description1}</p>
                  <div className="flex gap-4 justify-center">
                    <p className="w-fit p-2 text-2xl">{props.js1}</p>
                    <p className={`${props.cssa} w-fit p-2 text-2xl`}>{props.css1}</p>
                  </div>
                </div>
              </div>
              <div className="flex bg-slate-50 lg:flex-row-reverse flex-col shadow lg:rounded-2xl rounded-lg p-8">
                <div className="relative group">
                  <img className="lg:rounded-2xl rounded-lg shadow-md shadow-slate-500/50" src={props.image2} alt="website" />
                  <div className="absolute group-hover:block hidden top-0 dark h-full w-full lg:rounded-2xl rounded-lg">
                    <div className="lg:rounded-2xl rounded-lg h-full flex justify-center">
                      <div className="my-auto flex gap-4 text-white lg:text-4xl text-2xl">
                        <a href={props.demo2} target="blank" className=""><span className="inline-block ml-1 hover:text-blue-300"><MdOutlineConnectedTv/></span></a>
                        <a href={props.code2} target="blank"><span className="inline-block ml-1 hover:text-blue-300"><FaLaptopCode /></span></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:text-center my-auto grid lg:gap-8 gap-4 lg:mt-auto mt-6">
                  <h2 className="lg:text-4xl text-2xl font-bold">{props.project2}</h2>
                  <p className="text-gray-400  lg:px-10">{props.description2}</p>
                  <div className="flex gap-4 justify-center">
                    <p className="w-fit p-2 text-2xl">{props.js2}</p>
                    <p className={`${props.cssb} w-fit p-2 text-2xl`}>{props.css2}</p>
                  </div>
                </div>
              </div>
            </section>
  )
}