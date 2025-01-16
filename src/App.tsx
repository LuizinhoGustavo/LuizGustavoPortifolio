import { FileUser, Github, Linkedin } from "lucide-react";
import { SideBar } from "./Components/SideBar/SideBar";
import { Title } from "./Components/Title/Title"
import "./index.css"
import { ReactTyped } from "react-typed";

export function App() {
  return (
    <div className="flex flex-row bg-dotted-pattern justify-center">

      {/* Conteúdos em  Div's para corrigir a sobreposição do conteúdo na Side Bar*/}
      <div className="w-42">
        <SideBar />
      </div>


      <div className="flex flex-col w-full">
        <div className="h-screen flex mx-auto flex-col gap-2 items-center justify-center max-w-[1200px]">
          <h1 className="font-bold text-5xl"><ReactTyped strings={['Luiz Gustavo', 'Desenvolvedor FrontEnd']} typeSpeed={200} backSpeed={30} loop />
          </h1>
          <p className="font-semibold text-xl">Console.log(“Desenvolvo aplicações Web!”) </p>

          <div className="flex w-full flex-row justify-center gap-14">
            <Linkedin size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" />
            <Github size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" />
            <FileUser size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" />
          </div>
        </div>

        <div className="flex justify-start mx-auto w-full pb-52 max-w-[1000px]">
          <Title content="Experiência" color="#00FF4D50" size="52" />
        </div>

      </div>
    </div>

  )
}