import { FileUser, Github, Linkedin } from "lucide-react";
import { SideBar } from "./Components/SideBar/SideBar";
import { Title } from "./Components/Title/Title"
import "./index.css"
import { ReactTyped } from "react-typed";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Project } from "./Components/Project/Project";

import FilePic from '../src/assets/pictures/filePIc.png'
import { Tecnhologies } from "./Components/Technologies/Technologies";

export function App() {
  return (
    <div className="flex flex-row bg-dotted-pattern justify-center">

      {/* Conteúdos em  Div's para corrigir a sobreposição do conteúdo na Side Bar*/}

      <div className="w-42">
        <SideBar />
      </div>

      <div className="flex flex-col w-full">
        <div className="h-screen flex mx-auto flex-col gap-2 items-center justify-center max-w-[1200px]">
          <h1 className="font-bold text-2xl md:text-5xl"><ReactTyped strings={['Luiz Gustavo', 'Desenvolvedor Front-end']} typeSpeed={200} backSpeed={30} loop />
          </h1>
          <p className="font-semibold text-md md:text-xl">Console.log(“Desenvolvo aplicações Web!”) </p>

          <div className="flex w-full flex-row justify-center gap-14">
            <Linkedin size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" />
            <Github size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" />
            <FileUser size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" />
          </div>
        </div>

        <div className="flex flex-col gap-10 justify-start mx-auto w-full max-w-[850px]">
          <Title content="Experiência" color="#00FF4D50" size="52" />

          <AboutMe />

          <Title content="Projetos" color="#6A80B950" size="52" />

          {/* Projetos */}
          <div className="mx-3 grid gap-10 grid-cols-1 lg:grid-cols-2 mb-32">
            <Project title="Random Gutenberg Book" description="Um projeto que utiliza a API de livros da biblioteca de Gutenberg" projectLink="https://randomgutenbergbook.vercel.app/" filePic={FilePic} />
            <Project title="Random Gutenberg Book" description="Um projeto que utiliza a API de livros da biblioteca de Gutenberg" projectLink="https://randomgutenbergbook.vercel.app/" filePic={FilePic} />
            <Project title="Random Gutenberg Book" description="Um projeto que utiliza a API de livros da biblioteca de Gutenberg" projectLink="https://randomgutenbergbook.vercel.app/" filePic={FilePic} />
            <Project title="Random Gutenberg Book" description="Um projeto que utiliza a API de livros da biblioteca de Gutenberg" projectLink="https://randomgutenbergbook.vercel.app/" filePic={FilePic} />
          </div>

          <Title content="Tecnologias" color="#B96A6B50" size="52" />

          <Tecnhologies />

          <Title content="Tecnologias" color="#B96A6B50" size="52" />


        </div>
      </div>
    </div>
  )
}