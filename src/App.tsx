import { SideBar } from "./Components/SideBar/SideBar";
import "./index.css"

export function App() {
  return (
    <div>
      <SideBar />

      <div className="flex flex-col mx-auto justify-center text-center max-w-7xl">
        <h1>Luiz Gustavo</h1>
      </div>
    </div>
  )
}