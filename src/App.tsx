import { Computer, FileUser, Github, Linkedin } from "lucide-react";
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

          <Title content="Projetos" color="#6A80B950" size="44" />

          {/* Projetos */}
          <div className="mx-3 grid gap-10 grid-cols-1 lg:grid-cols-2 mb-32">
            <Project title="Random Gutenberg Book" description="Um projeto que utiliza a API de livros da biblioteca de Gutenberg" projectLink="https://randomgutenbergbook.vercel.app/" filePic={FilePic} />
          </div>

          <Title content="Tecnologias" color="#B96A6B50" size="52" />

          <Tecnhologies />

          <Title content="O que eu faço" color="#EEFF0050" size="60" />

          <div className="flex justify-center gap-12 flex-wrap w-[90%] pb-32">
            <div className="bg-[#DB6B6B50] h-72 w-52 border-2 border-[#DB6B6B] rounded-2xl -rotate-[10deg] p-3">
              <Computer />
              <span className="font-bold text-2xl">programação Web</span>
            </div>
            <div className="bg-[#88FFA250] h-72 w-52 border-2 border-[#88FFA2] rounded-2xl rotate-[12deg]">

            </div>
            <div className="bg-[#9E88FF50] h-72 w-52 border-2 border-[#9E88FF] rounded-2xl -rotate-[8deg]">

            </div>
          </div>


        </div>
      </div>
    </div>
  )
}