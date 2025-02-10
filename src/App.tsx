import { FileUser, Github, Linkedin } from "lucide-react";
import { SideBar } from "./Components/SideBar/SideBar";
import { Title } from "./Components/Title/Title"
import "./index.css"
import { ReactTyped } from "react-typed";
//import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Project } from "./Components/Project/Project";
import { Tecnhologies } from "./Components/Technologies/Technologies";

import FilePic from '../src/assets/pictures/filePIc.png'
import { TimelineElement } from "./Components/TimelineElement/TimelinElement";
import { RandomText } from "./Components/RandomText/RandomText";

export function App() {
  return (
    <div className="flex flex-row bg-dotted-pattern justify-center">

      {/* Conteúdos em  Div's para corrigir a sobreposição do conteúdo na Side Bar*/}

      <div className="w-42">
        <SideBar />
      </div>

      <div id="home" className="flex flex-col w-full">
        <div className="h-screen flex mx-auto flex-col gap-2 items-center justify-center max-w-[1200px]">
          <h1 className="font-bold text-2xl md:text-5xl"><ReactTyped strings={['Luiz Gustavo', 'Desenvolvedor Front-end']} typeSpeed={200} backSpeed={30} loop />
          </h1>
          <RandomText />

          <div className="flex w-full flex-row justify-center gap-14">
            <a href="https://www.linkedin.com/in/luiz-gustavo-silva-49b71725a/" target="_blank"><Linkedin size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" /></a>
            <a href="https://github.com/LuizinhoGustavo" target="_blank"><Github size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" /></a>
            <a href="" target="_blank"><FileUser size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" /></a>
          </div>
        </div>

        <div className="flex flex-col gap-10 justify-start mx-auto w-full max-w-[850px]">
          {/*<Title content="Experiência" color="#00FF4D50" size="52" />

          <AboutMe />*/}

          <Title content="Projetos" color="#6A80B950" size="40" />

          {/* Projetos */}
          <div className="mx-3 grid gap-10 grid-cols-1 lg:grid-cols-2 mb-32">
            <Project title="Random Gutenberg Book" description="Um projeto que utiliza a API de livros da biblioteca de Gutenberg" projectLink="https://randomgutenbergbook.vercel.app/" filePic={FilePic} />
          </div>

          <Title content="Tecnologias" color="#B96A6B50" size="52" />

          <Tecnhologies />

          <div className="flex flex-col gap-10 w-full py-14">
            <Title content="O que eu faço" color="#EEFF0050" size="64" />

            <div className="flex justify-center gap-12 flex-wrap w-[90%] pb-16">
              <div className="bg-[#DB6B6B50] h-72 w-52 border-2 border-[#DB6B6B] rounded-2xl -rotate-[10deg] p-3">
                <span className="font-bold text-2xl">Programação Frontend</span>
              </div>
              <div className="bg-[#88FFA250] h-72 w-52 border-2 border-[#88FFA2] rounded-2xl rotate-[12deg] p-3">
                <span className="font-bold text-2xl">Programação Backend</span>
              </div>
              <div className="bg-[#9E88FF50] h-72 w-52 border-2 border-[#9E88FF] rounded-2xl -rotate-[8deg] p-3">
                <span className="font-bold text-2xl">Pacote office e Power BI</span>
              </div>
            </div>
          </div>

          <Title content="Experiência" color="#DB4EA350" size="52" />

          <div className="flex flex-col gap-2 w-2/3 pb-32 mx-auto">
            <TimelineElement representation="Earth" title="Inglês Avançado - (C1)" date="2014 - 2024" place="Cultura Inglesa" />
            <TimelineElement representation="GraduationCap" title="Técnico em Desenvolvimento de Sistemas" date="2021 - 2023" place="ETEC Lauro Gomes" />
            <TimelineElement representation="GraduationCap" title="Bacharel em Ciência e Tecnologia / Ciência da Computação" date="2024 - 2028" place="UFABC" />
            <TimelineElement representation="LaptopMinimal" title="Estágio em Desenvolvimento Front-End" date="2024 - Atualmente" place="Prefeitura de Santo André" />
          </div>


        </div>
      </div>
    </div>
  )
}