import { i18n } from "../../translate/i18n"

interface ProjectProps {
    filePic: string
    title: string
    description: string
    projectLink: string
}

export function Project({ filePic, title, description, projectLink }: ProjectProps) {
    return (
        <div className="w-100 bg-backgroundColor rounded-lg p-5 border border-textColor">
            <img src={filePic} />

            <div className="flex flex-row justify-between gap-3 pt-3">
                <div className='flex-1'>
                    <strong className="text-textColor">{title}</strong>
                    <p className="text-textColor">{description}</p>
                </div>

                <a href={projectLink} target="_blank" className="bg-transparent border border-[#6A80B9] text-[#6A80B9] flex flex-col justify-center h-12 my-auto align-middle px-7 rounded-b-3xl rounded-l-3xl hover:text-white font-bold hover:bg-[#6A80B9] duration-700">
                    {`${i18n.t('projects.button')}`}
                </a>
            </div>

        </div>
    )
}