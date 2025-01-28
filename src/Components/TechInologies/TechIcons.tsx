interface TechIconsProps {
    imageLink: string
    imageAlt: string
}

export function TechIcon({ imageLink, imageAlt }: TechIconsProps) {
    return (
        <div className="bg-[#6A80B950] p-5 border-4 rounded-3xl border-[#6A80B9] h-28 w-28">
            <img src={imageLink} alt={imageAlt} className="border rounded-3xl" />
        </div>
    )
}