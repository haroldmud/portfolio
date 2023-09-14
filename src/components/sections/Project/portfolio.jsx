import Project from "./projects"
import { SiTailwindcss } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiPostgresql } from 'react-icons/si'

export default function Portfolio() {
  return(
    <section className="md:pt-40 pt-20 max-w-[80rem] mx-auto">
          <section className="md:px-14 px-4">
            <h1 className="text-2xl text-blue-400">PORTFOLIO</h1>
            <p className="md:text-4xl text-2xl font-bold mt-4">Each project is a unique piece of development 🧩</p>
    <section className="mt-4 grid md:gap-2">
      <Project 
        image1='/image/newsxo.png'
        demo1='https://deploy-preview-1--jovial-pithivier-3d1bc9.netlify.app/'
        code1='https://github.com/haroldmud/newsxo'
        project1='NewsXO'
        description1='NewsXO is a dynamic and innovative online news platform that provides users with timely, accurate, and engaging news coverage from around the world. Our mission is to deliver comprehensive and balanced reporting on a wide range of topics, including politics, business, technology, entertainment, sports, and more.'
        js1={<FaReact/>}
        css1={<SiTailwindcss />}
        image2='/image/beton-clef.png'
        demo2='https://dev--hilarious-monstera-5162d7.netlify.app/'
        code2='https://github.com/haroldmud/beton-clef'
        project2='Béton-Clef Technique'
        description2={`Béton-Clef Technique's (BCT) website is a well-designed and informative resource for anyone interested in their construction services. The it's home page contains interesting features as rotating slider with images of their recent projects, as well as a brief overview of the company's history and capabilities. `}
        js2={<TbBrandNextjs />}
        css2={<SiTailwindcss />}
      />
      <Project
        image1='/image/native.jpg'
        demo1='https://docs.expo.dev/get-started/expo-go/'
        code1='https://github.com/haroldmud/space-mission'
        project1='SPACE-MISSION'
        description1={`This is an app that retrieves data containing missions and rockets from spaceX API and allows the user to join the missions or book the different rockets. And all of this was built in a beautiful and well-organized way!`}
        js1={<div className=" grid -gap-6"><FaReact className="mx-auto" /><span className="text-sm text-center">native</span></div>}
        cssa='hidden' 
        image2='/image/sql.png'
        demo2='https://github.com/haroldmud/Vet-clinic-project/blob/dev/README.md'
        demo='hidden'
        code2='https://github.com/haroldmud/Vet-clinic-project/blob/dev'
        project2='VET CLINIC DATABASE'
        description2='vet clinic database was created using PostgreSQL SQL. The database has tables for animals, owners, vets, visits, medications, and invoices.  '
        js2={<SiPostgresql />}
        cssb='hidden'
      />
    </section>
    </section>
    </section>
  )
}