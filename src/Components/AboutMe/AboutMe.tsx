//import { Coffee, Linkedin, Music } from "lucide-react";

import aa from '../../assets/pictures/filePIc.png' 
import { i18n } from '../../translate/i18n'
import curriculum from '../../assets/Curriculo_LuizGustavo.pdf'

export function AboutMe() {
    return (
        <div className="flex flex-row h-full justify-center items-center gap-10 text-textColor">
            <img src={aa} alt="" className="rounded-full w-80 h-80" />
            <div className='flex flex-col gap-4'>
            <div className="font-medium flex flex-col gap-3 text-justify">
                <p>{`${i18n.t('aboutMe.p1Text')}`}</p>
                <p>{`${i18n.t('aboutMe.p2Text')}`}</p>
                <p>{`${i18n.t('aboutMe.p3Text')}`}</p>
            </div>

            <a href={curriculum} target="_blank" className="bg-transparent border border-orangeColor text-orangeColor flex flex-col justify-center h-12 my-auto align-middle px-7 rounded-b-3xl rounded-l-3xl hover:text-white font-bold hover:bg-orangeColor duration-700">
                    {`${i18n.t('aboutMe.btnCV')}`}
                </a>
            </div>
            
        </div>
    )
}