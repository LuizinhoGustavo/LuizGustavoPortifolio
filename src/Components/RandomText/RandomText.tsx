export function RandomText() {
    const randomMenssage = Math.round(Math.random() * 4)
    let menssage = "Console.log(“Desenvolvo aplicações Web!”)"


    if (randomMenssage === 1) {
        menssage = "<h1>Desvolvo aplicações frontend</h1>"
    } else if (randomMenssage === 2) {
        menssage = "console.writeline('Desenvolvo aplicações frontend')"
    } else if (randomMenssage === 3) {
        menssage = "print('Desenvolvo aplicações frontend')"
    }

    return (
        <p className="font-semibold text-md md:text-xl">{menssage}</p>
    )
}