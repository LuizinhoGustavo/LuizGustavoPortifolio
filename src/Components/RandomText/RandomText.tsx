import { i18n } from "../../translate/i18n"

export function RandomText() {
    const randomMenssage = Math.round(Math.random() * 4)
    let menssage = `Console.log(“${i18n.t('subtitles.sub')}”)`


    if (randomMenssage === 1) {
        menssage = `<h1>${i18n.t('subtitles.sub')}</h1>`
    } else if (randomMenssage === 2) {
        menssage = `console.writeline('${i18n.t('subtitles.sub')}')`
    } else if (randomMenssage === 3) {
        menssage = `print('${i18n.t('subtitles.sub')}')`
    }

    return (
        <p className="font-semibold text-textColor text-md md:text-xl">{menssage}</p>
    )
}