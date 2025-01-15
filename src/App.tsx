import { FileUser, Github, Linkedin } from "lucide-react";
import { SideBar } from "./Components/SideBar/SideBar";
import "./index.css"
import { ReactTyped } from "react-typed";

export function App() {
  return (
    <div className="flex flex-row bg-dotted-pattern">

      {/* Conteúdos em  Div's para corrigir a sobreposição do conteúdo na Side Bar*/}
      <div className="w-42">
        <SideBar />
      </div>

      <div className="flex flex-col mx-auto justify-center max-w-5xl">
        <div className="h-screen flex flex-col gap-2 items-center justify-center">
          <h1 className="font-bold text-5xl"><ReactTyped strings={['Luiz Gustavo', 'Desenvolvedor FrontEnd']} typeSpeed={200} backSpeed={30} loop />
          </h1>
          <p className="font-semibold text-xl">Console.log(“Desenvolvo aplicações Web!”) </p>

          <div className="flex w-full flex-row justify-center gap-14">
            <Linkedin size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" />
            <Github size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" />
            <FileUser size={40} strokeWidth={1.7} className="hover:text-orange-600 duration-500" />
          </div>
        </div>


      </div>



    </div >
  )
}