//import { Coffee, Linkedin, Music } from "lucide-react";

export function AboutMe() {
    return (

        <div className="flex items-center justify-center ">
            <div className=" w-[40rem]">
                {/* Linhas horizontais */}
                <div className="absolute top-0 -left-4 -right-4 h-0.5 bg-black"></div>
                <div className="absolute bottom-0 -left-4 -right-4 h-0.5 bg-black"></div>
                <div className="flex flex-col gap-3 justify-center max-w-full mb-10 mx-3 p-5 py-20">
                    <p>Meu nome é Luiz Gustavo e sou estudante de Ciência da Computação na UFABC. Iniciei meus estudos em programação em 2021, durante o curso técnico em Desenvolvimento de Sistemas.</p>
                    <p>Após isso, comecei a me especializar em algumas tecnologias e ferramentas, entre elas está o desenvolvimento Frontend, uma área onde sempre tive muito interesse.</p>




                </div>
                {/* Linhas verticais */}
                <div className="absolute -top-6 -bottom-6 left-2 w-0.5 bg-black"></div>
                <div className="absolute -top-6 -bottom-6 right-2 w-0.5 bg-black"></div>
            </div>
        </div>

    )
}

{/*<div className="mb-32 flex items-center justify-center">
            <div classNameName="flex flex-col gap-3 justify-center border border-black rounded max-w-full mb-10 mx-3 p-5 py-20 bg-[#F8F8F8]">
                <p classNameName="text-2xl text-justify">Olá! Meu nome é Luiz Gustavo e sou estudante de Ciência da Computação na UFABC. Iniciei meus estudos em programação em 2021, durante o curso técnico em Desenvolvimento de Sistemas.</p>
                <p classNameName="text-2xl text-justify">Sou apaixonado por tecnologia e, além da programação, tenho grande interesse por música, cinema, futebol e muitas outras coisas. Fique à vontade para me chamar em qualquer lugar para conversarmos mais sobre esses temas!</p>
            </div>

            <div classNameName="w-full grid grid-cols-2 lg:grid-cols-4 gap-5 px-2">
                <div classNameName="flex align-middle gap-5">
                    <Coffee size={45} />

                    <span classNameName="font-bold">20 xícaras de café nas últimas 12 horas</span>
                </div>

                <div classNameName="flex align-middle gap-4 ">
                    <Music size={50} />

                    <span classNameName="font-bold">5 Playlists diferentes para começar um projeto novo</span>
                </div>

                <div classNameName="flex align-middle gap-4 ">
                    <Linkedin size={45} />

                    <span classNameName="font-bold">10 Espiadas no linkedin em busca de oportunidades</span>
                </div>

                <div classNameName="flex align-middle gap-4 ">
                    <Linkedin size={45} />

                    <span classNameName="font-bold">10 Espiadas no linkedin em busca de oportunidades</span>
                </div>
            </div>

        </div >*/}