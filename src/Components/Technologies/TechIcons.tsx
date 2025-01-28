interface TechIconsProps {
    imageLink: string
}

export function TechIcon({ imageLink }: TechIconsProps) {
    return (
        <div className="bg-[#6A80B950] p-3 border-4 rounded-3xl border-[#6A80B9] h-28 w-28">
            <img src={imageLink} alt="Ícone da Tecnologia" />
        </div>
    )
}