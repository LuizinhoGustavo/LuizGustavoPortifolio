import { useState } from 'react';

import { House, SquareUser, FolderKanban, FileJson2, BriefcaseBusiness, PanelRightOpen, PanelRightClose } from 'lucide-react'

export function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className="flex">

            <aside
                className={`h-full w-16 fixed md:w-32 flex flex-col gap-10 justify-center items-center bg-white left-0 border-2 border-gray-300 shadow-lg shadow-indigo-500/50 transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="text-center hover:text-orange-600 duration-500"><a href="#"><House size={37} /></a></div>
                <div className="text-center hover:text-orange-600 duration-500"><a href="#"><SquareUser size={37} /></a></div>
                <div className="text-center hover:text-orange-600 duration-500"><a href="#"><FolderKanban size={37} /></a></div>
                <div className="text-center hover:text-orange-600 duration-500"><a href="#"><FileJson2 size={37} /></a></div>
                <div className="text-center hover:text-orange-600 duration-500"><a href="#"><BriefcaseBusiness size={37} /></a></div>
            </aside>

            {/* Button positioned next to the sidebar */}
            <button className={`ml-4 p-2 z-10 md:hidden ${isOpen ? 'translate-x-12 md:translate-x-28' : '-translate-x-3'} duration-700`} onClick={toggleSidebar} >
                {isOpen ? <PanelRightClose /> : <PanelRightOpen />}
            </button>
        </div>
    )
}