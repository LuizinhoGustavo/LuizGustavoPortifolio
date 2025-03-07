import { useState } from 'react';
import { Link } from 'react-scroll';
import { House, FolderKanban, FileJson2, BriefcaseBusiness, PanelRightOpen, PanelRightClose } from 'lucide-react'

export function SideBar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className="flex z-40">
            <aside className={`h-full w-16 fixed md:w-32 flex flex-col gap-10 justify-center items-center bg-backgroundColor left-0 border-r-grayColor border-2 border-backgroundColor shadow-lg 
                transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                
                <div className="text-center text-iconsColor hover:text-orangeColor duration-300">
                    <Link to="home" smooth={true} duration={400}><House size={37} /></Link>
                </div>
                <div className="text-center text-iconsColor hover:text-orangeColor duration-300">
                    <Link to="projects" smooth={true} duration={500}><FolderKanban size={37} /></Link>
                </div>
                <div className="text-center text-iconsColor hover:text-orangeColor duration-300">
                    <Link to="technologies" smooth={true} duration={500}><FileJson2 size={37} /></Link>
                </div>
                <div className="text-center text-iconsColor hover:text-orangeColor duration-300">
                    <Link to="experiences" smooth={true} duration={500}><BriefcaseBusiness size={37} /></Link>
                </div>
            </aside>
        
            {/* Contêiner para o conteúdo principal */}
            <div className={`flex-1 transition-all duration-500`}>
                {/* Aqui você pode colocar o conteúdo principal da sua aplicação */}
                <button className={`ml-4 p-2 z-10 md:hidden ${isOpen ? 'translate-x-12 md:translate-x-28' : '-translate-x-3'} duration-700`} onClick={toggleSidebar}>
                    {isOpen ? <PanelRightClose /> : <PanelRightOpen />}
                </button>
                {/* Conteúdo principal vai aqui */}
            </div>
        </div>
    )
}