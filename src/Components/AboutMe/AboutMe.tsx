import { Coffee, Linkedin, Music } from "lucide-react";

export function AboutMe() {
    return (
        <div className="mb-32">
            <div className="flex flex-col gap-3 justify-center border border-black rounded max-w-full mb-10 mx-3 p-5 py-20 bg-[#F8F8F8]">
                <p className="text-2xl text-justify">Olá! Meu nome é Luiz Gustavo e sou estudante de Ciência da Computação na UFABC. Iniciei meus estudos em programação em 2021, durante o curso técnico em Desenvolvimento de Sistemas.</p>
                <p className="text-2xl text-justify">Sou apaixonado por tecnologia e, além da programação, tenho grande interesse por música, cinema, futebol e muitas outras coisas. Fique à vontade para me chamar em qualquer lugar para conversarmos mais sobre esses temas!</p>
            </div>

            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-5 px-2">
                <div className="flex align-middle gap-5">
                    <Coffee size={45} />

                    <span className="font-bold">20 xícaras de café nas últimas 12 horas</span>
                </div>

                <div className="flex align-middle gap-4 ">
                    <Music size={50} />

                    <span className="font-bold">5 Playlists diferentes para começar um projeto novo</span>
                </div>

                <div className="flex align-middle gap-4 ">
                    <Linkedin size={45} />

                    <span className="font-bold">10 Espiadas no linkedin em busca de oportunidades</span>
                </div>

                <div className="flex align-middle gap-4 ">
                    <Linkedin size={45} />

                    <span className="font-bold">10 Espiadas no linkedin em busca de oportunidades</span>
                </div>
            </div>
        </div>
    )
}