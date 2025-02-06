interface TitleProps {
    content: string,
    color: '#00FF4D50' | '#6A80B950' | '#B96A6B50' | '#EEFF0050' | '#DB4EA350',
    size: string
}

export function Title({ content, color, size }: TitleProps) {
    return (
        <h2 className={`font-bold text-4xl w-${size} bg-[${color}]`} >
            {content}
        </h2 >
    )
}