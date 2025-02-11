interface TitleProps {
    content: string,
}

export function Title({ content }: TitleProps) {
    return (
        <h2 className='font-bold text-4xl w-fit '>
            {content}
        </h2>
    )
}   