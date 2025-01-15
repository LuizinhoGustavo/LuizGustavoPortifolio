import { useState } from 'react';

import { House, SquareUser, FolderKanban, FileJson2, BriefcaseBusiness, PanelRightOpen, PanelRightClose } from 'lucide-react'

export function SideBar() {
    const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState); // Toggle the sidebar state
    };

    return (
        <div className="flex"> {/* Use flex to align sidebar and button */}
            <aside
                className={`h-full w-16 md:w-32 flex flex-col gap-10 justify-center items-center left-0 fixed border-2 border-gray-300 shadow-lg shadow-indigo-500/50 transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="text-center hover:text-orange-600 duration-500"><a href="#"><House size={40} /></a></div>
                <div className="text-center hover:text-orange-600 duration-500"><a href="#"><SquareUser size={40} /></a></div>
                <div className="text-center hover:text-orange-600 duration-500"><a href="#"><FolderKanban size={40} /></a></div>
                <div className="text-center hover:text-orange-600 duration-500"><a href="#"><FileJson2 size={40} /></a></div>
                <div className="text-center hover:text-orange-600 duration-500"><a href="#"><BriefcaseBusiness size={40} /></a></div>
            </aside>

            {/* Button positioned next to the sidebar */}
            <button
                className={`ml-4 p-2 z-10 ${isOpen ? 'translate-x-12' : '-translate-x-3'} duration-700`}
                onClick={toggleSidebar}
            >
                {isOpen ? <PanelRightClose /> : <PanelRightOpen />}
            </button>
        </div>
    )
}