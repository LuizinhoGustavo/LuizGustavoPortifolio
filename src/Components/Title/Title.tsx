interface TitleProps {
    content: string,
    color: '#00FF4D50' | '#6A80B950' | '#B96A6B50' | '#EEFF0050' | '#DB4EA350',
    size: string
}

export function Title(Props: TitleProps) {
    return (
        <h2 className={`font-bold text-4xl w-${Props.size} bg-[${Props.color}]`} >
            {Props.content}
        </h2 >
    )
}