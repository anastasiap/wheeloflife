export function shadeColor(color: string, percent: number) {
    // todo refactor it
    const Red = parseInt(color.substring(1, 3), 16)
    const Green = parseInt(color.substring(3, 5), 16)
    const Blue = parseInt(color.substring(5, 7), 16)

    let R = Math.floor(Red * (100 + percent) / 100)
    let G = Math.floor(Green * (100 + percent) / 100)
    let B = Math.floor(Blue * (100 + percent) / 100)

    R = (R < 255) ? R : 255
    G = (G < 255) ? G : 255
    B = (B < 255) ? B : 255

    const RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16))
    const GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16))
    const BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16))

    return '#' + RR + GG + BB
}

export function mapLangKeys(key: string): string {
    const LANGUAGES = {
        en: 'English',
        ru: 'Русский',
    }

    return LANGUAGES[key]
}

export function getLocale(): string {
    return navigator.language.split('-')[0]
}
