import { Earth, LaptopMinimal, GraduationCap, Plane } from "lucide-react";

interface TimelineElementProps {
    representation: 'Earth' | 'LaptopMinimal' | 'GraduationCap' | 'Plane'
    title: string
    date: string
    place: string
}

export function TimelineElement({ representation, title, date, place }: TimelineElementProps) {
    return (
        <div className="flex flex-row gap-3">
            <div className="w-10 flex flex-col items-center justify-center gap-2">
                {representation === 'Earth' && <Earth className="text-iconsColor" size={40} strokeWidth={1.7} />}
                {representation === 'LaptopMinimal' && <LaptopMinimal className="text-iconsColor" size={40} strokeWidth={1.7} />}
                {representation === 'GraduationCap' && <GraduationCap className="text-iconsColor" size={40} strokeWidth={1.7} />}
                {representation === 'Plane' && <Plane className="text-iconsColor" size={40} strokeWidth={1.7} />}

                <span className="bg-orange-600 w-[0.30rem] h-24" />
            </div>
            <div className="flex-1">
                <h3 className="font-bold text-2xl text-textColor">{title}</h3>
                <p className="text-sm text-textColor">{date} / {place}</p>
            </div>
        </div>
    )
}