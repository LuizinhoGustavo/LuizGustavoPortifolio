import { Coffee, Linkedin, Music } from "lucide-react";

export function AboutMe() {
    return (
        <div className="mb-32">
            <div className="flex flex-col gap-3 justify-center border border-black rounded max-w-full mb-10 mx-3 p-5 py-20 bg-[#F8F8F8]">
                <p className="text-2xl text-justify">Olá, Me chamo Luiz Gustavo e sou estudante univesitário na UFABC, cursando Ciência da Computação. Comecei meus estudos em programação em 2021 no técnico em desenvolvimento de sistemas.</p>
                <p className="text-2xl text-justify">Além de programação, gosto muito de música, cinema, futebol e DIVERSAS outras coisas, pode me chamar em qualquer local para conversamos mais sobre isso!!</p>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 px-2">
                <div className="flex align-middle gap-5 justify-between">
                    <Coffee size={45} />

                    <span className="font-bold">20 xícaras de café nas últimas 12 horas</span>
                </div>

                <div className="flex align-middle gap-4 justify-between">
                    <Music size={50} />

                    <span className="font-bold">5 Playlists diferentes para começar um projeto novo</span>
                </div>

                <div className="flex align-middle gap-4 justify-between">
                    <Linkedin size={45} />

                    <span className="font-bold">10 Espiadas no linkedin em busca de oportunidades</span>
                </div>
            </div>
        </div>
    )
}