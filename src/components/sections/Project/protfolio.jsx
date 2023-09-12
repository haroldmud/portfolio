import Project from "./projects"

export default function Portfolio() {
  return(
    <section className="md:pt-40 pt-20 max-w-[80rem] mx-auto">
          <section className="md:px-14 px-4">
            <h1 className="text-2xl text-blue-400">PORTFOLIO</h1>
            <p className="text-4xl font-bold mt-4">Each project is a unique piece of development 🧩</p>
    <section className="mt-4 grid md:gap-2">
      <Project 
        image1='/image/newsxo.png'
        demo1='https://deploy-preview-1--jovial-pithivier-3d1bc9.netlify.app/'
        code1='https://github.com/haroldmud/newsxo'
        project1='NewsXO'
        description1='NewsXO is a dynamic and innovative online news platform that provides users with timely, accurate, and engaging news coverage from around the world. Our mission is to deliver comprehensive and balanced reporting on a wide range of topics, including politics, business, technology, entertainment, sports, and more.'
        js1='REACT'
        css1='TCSS'
        image2='/image/beton-clef.png'
        demo2='https://dev--hilarious-monstera-5162d7.netlify.app/'
        code2='https://github.com/haroldmud/beton-clef'
        project2='Béton-Clef Technique'
        description2={`Béton-Clef Technique's (BCT) website is a well-designed and informative resource for anyone interested in their construction services. The it's home page contains interesting features as rotating slider with images of their recent projects, as well as a brief overview of the company's history and capabilities. `}
        js2='NEXT'
        css2='TCSS'
      />
      <Project 
        image1='/image/vanlife.png'
        demo1='https://vanlife-cyan.vercel.app/vans'
        code1='https://github.com/haroldmud/vanlife'
        project1='VANLIFE'
        description1='Vanlife is a single-page application that uses React Router DOM to manage the routing between different pages.  Users can also browse vans by category, such as camper vans, cargo vans, and passenger vans. Once a user has found a van that they are interested in, they can click on the "Rent this van" button to start the booking process.'
        js1='REACT'
        css1='TCSS'
        image2='/image/native.jpg'
        demo2='https://docs.expo.dev/get-started/expo-go/'
        code2='https://github.com/haroldmud/space-mission'
        project2='SPACE-MISSION'
        description2={`This is an app that retrieves data containing missions and rockets from spaceX API and allows the user to join the missions or book the different rockets. And all of this was built in a beautiful and well-organized way! `}
        js2='REACT NATIVE'
        cssb='hidden'
      />
      <Project
        image1='/image/ruby.png'
        demo1='https://github.com/haroldmud/my-oop-library-school/blob/dev/README.md'
        code1='https://github.com/haroldmud/my-oop-library-school/blob/dev'
        project1='MY OOP LIBRARY'
        description1={`The app MY OOP LIBRARY will allow us to Add new students or teachers, Add new books and Save records of who borrowed a given book and when. And all of this was built in a beautiful and well-organized way! `}
        js1='RUBY'
        cssa='hidden' 
        image2='/image/sql.png'
        demo2='https://github.com/haroldmud/Vet-clinic-project/blob/dev/README.md'
        code2='https://github.com/haroldmud/Vet-clinic-project/blob/dev'
        project2='VET CLINIC DATABASE'
        description2='vet clinic database was created using PostgreSQL SQL. The database has tables for animals, owners, vets, visits, medications, and invoices.  '
        js2='PLpgSQL'
        cssb='hidden'
      />
    </section>
    </section>
    </section>
  )
}