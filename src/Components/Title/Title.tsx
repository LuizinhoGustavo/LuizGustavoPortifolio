interface TitleProps {
    content: string,
    color: '#00FF4D50' | '#6A80B950' | '#B96A6B50' | '#EEFF0050' | '#DB4EA350',
    size: string
}

export function Title({ content, color, size }: TitleProps) {

    if (color === '#00FF4D50') {
        return (
            <h2 className={`font-bold text-4xl w-${size} bg-[#00FF4D50]`} >
                {content}
            </h2 >
        )
    } else if (color === '#6A80B950') {
        return (
            <h2 className={`font-bold text-4xl w-${size} bg-[#6A80B950]`} >
                {content}
            </h2 >
        )
    } else if (color === '#B96A6B50') {
        return (
            <h2 className={`font-bold text-4xl w-${size} bg-[#B96A6B50]`} >
                {content}
            </h2 >
        )
    } else if (color === '#EEFF0050') {
        return (
            <h2 className={`font-bold text-4xl w-${size} bg-[#EEFF0050]`} >
                {content}
            </h2 >
        )
    } else if (color === '#DB4EA350') {
        return (
            <h2 className={`font-bold text-4xl w-${size} bg-[#DB4EA350]`} >
                {content}
            </h2 >
        )
    }
}   