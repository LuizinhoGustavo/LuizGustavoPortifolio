import { ChartColumn, FileUser, Github, LaptopIcon, Linkedin, Pencil } from "lucide-react";
import { SideBar } from "./Components/SideBar/SideBar";
import { Title } from "./Components/Title/Title"
import "./index.css"
import { ReactTyped } from "react-typed";
//import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Project } from "./Components/Project/Project";
import { Tecnhologies } from "./Components/Technologies/Technologies";

import FilePic from '../src/assets/pictures/filePIc.png'
import { TimelineElement } from "./Components/TimelineElement/TimelineElement";
import { RandomText } from "./Components/RandomText/RandomText";

import { i18n } from "./translate/i18n";
import usa from "../src/assets/pictures/usa_flag.png"
import brazil from "../src/assets/pictures/brazil_flag.png"
import { ThemeToggle } from '../src/Components/ThemeToggle/ThemeToggle';

export function App() {

  function handleLanguage(event: React.MouseEvent<HTMLButtonElement>) {
    const value = (event.target as HTMLButtonElement).value;
    window.localStorage.setItem('i18nextLng', value);

    window.location.reload();
  }

  return (
    <div className="flex flex-row bg-dotted-pattern justify-center">

      <div className="fixed flex items-center gap-3 top-4 right-4 z-50">
        <ThemeToggle />

        {
          window.localStorage.getItem('i18nextLng') === 'pt-BR' ?
            <button value="" onClick={handleLanguage} className='bg-transparent text-textColor text-sm flex items-center gap-1'> <img src={usa} alt="Bandeira Estados Unidos" />English</button>
            :
            <button value="pt-BR" onClick={handleLanguage} className='bg-transparent text-textColor text-sm flex items-center gap-1'> <img src={brazil} alt="Bandeira Brasil" />Português</button>
        }
      </div>

      {/* Conteúdos em  Div's para corrigir a sobreposição do conteúdo na Side Bar*/}

      <div className="w-42">
        <SideBar />
      </div>

      <div id="home" className="flex flex-col w-full">
        <div className="h-screen flex mx-auto flex-col gap-2 items-center justify-center max-w-[1200px]">
          <h1 className="font-bold text-textColor text-2xl md:text-5xl"><ReactTyped strings={['Luiz Gustavo', i18n.t('title.dev')]} typeSpeed={200} backSpeed={30} loop />
          </h1>
          <RandomText />

          <div className="flex w-full flex-row justify-center gap-14">
            <a href="https://www.linkedin.com/in/luiz-gustavo-silva-49b71725a/" target="_blank"><Linkedin size={40} strokeWidth={1.7} className="text-iconsColor hover:text-orange-600  duration-500" /></a>
            <a href="https://github.com/LuizinhoGustavo" target="_blank"><Github size={40} strokeWidth={1.7} className="text-iconsColor hover:text-orange-600 duration-500" /></a>
            <a href="" target="_blank"><FileUser size={40} strokeWidth={1.7} className="text-iconsColor hover:text-orange-600 duration-500" /></a>
          </div>
        </div>

        <div className="flex flex-col gap-10 justify-start mx-auto w-full max-w-[850px]">
          {/* <Title content="Sobre Mim" />

          <AboutMe /> */}

          {/* Projetos */}
          <span id="projects" className=" mb-10 " />

          <Title content={`${i18n.t('subtitles.projects')}`} />

          <div className="mx-3 grid gap-10 grid-cols-1 lg:grid-cols-2 mb-32">
            <Project title={`${i18n.t('projects.randomGutenbergBook.title')}`} description={`${i18n.t('projects.randomGutenbergBook.description')}`} projectLink="https://randomgutenbergbook.vercel.app/" filePic={FilePic} />

          </div>

          <span id="technologies" className=" mb-10 " />

          <Title content={`${i18n.t('subtitles.tecnhologies')}`} />

          <Tecnhologies />

          <div className="flex flex-col gap-10 w-full py-14">
            <Title content={`${i18n.t('subtitles.whatIDo')}`} />

            <div className="flex justify-center mx-auto gap-12 flex-wrap w-[90%] pb-16">
              <div className="bg-[#DB6B6B50] h-72 w-52 flex flex-col justify-center border-2 border-[#DB6B6B] rounded-2xl -rotate-[10deg] p-3">
                <LaptopIcon className="text-iconsColor" />
                <span className="font-bold text-textColor text-[1.4rem]">{`${i18n.t('whatIDo.frontend')}`} </span>
              </div>
              <div className="bg-[#88FFA250] h-72 w-52 flex flex-col justify-center border-2 border-[#88FFA2] rounded-2xl rotate-[12deg] p-3">
                <Pencil className="text-iconsColor" />
                <span className="font-bold text-textColor text-[1.4rem]">{`${i18n.t('whatIDo.frontend')}`}</span>
              </div>
              <div className="bg-[#9E88FF50] h-72 flex flex-col justify-center w-52 border-2 border-[#9E88FF] rounded-2xl -rotate-[8deg] p-3">
                <ChartColumn className="text-iconsColor" />
                <span className="font-bold text-textColor text-[1.4rem]">{`${i18n.t('whatIDo.office')}`}</span>
              </div>
            </div>
          </div>

          <span id="experiences" className=" mb-10 " />

          <Title content={`${i18n.t('subtitles.experience')}`} />

          <div className="flex flex-col gap-2 w-2/3 pb-32 mx-auto">
            <TimelineElement representation="Earth" title={`${i18n.t('experience.english')}`} date="2014 - 2024" place={`${i18n.t('experience.place.culture')}`} />
            <TimelineElement representation="GraduationCap" title={`${i18n.t('experience.technicalCourse')}`} date="2021 - 2023" place={`${i18n.t('experience.place.etec')}`} />
            <TimelineElement representation="GraduationCap" title={`${i18n.t('experience.bachelor')}`} date="2024 - 2028" place={`${i18n.t('experience.place.ufabc')}`} />
            <TimelineElement representation="LaptopMinimal" title={`${i18n.t('experience.internship')}`} date="2024 - Atualmente" place={`${i18n.t('experience.place.cityHall')}`} />
          </div>
        </div>
      </div>
    </div>
  )
}