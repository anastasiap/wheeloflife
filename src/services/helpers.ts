/*
 * Takes RGB color and returns its darker or lighter version
 */
export const shadeColor = (color: string, percent: number): string => {
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

/*
 * Returns user browser language settings
 */
export const getLocale = (): string => navigator.language.split('-')[0]

/*
 * Checks if cookie with given name exists
 */
export const checkCookie = (key: string): number =>
    document.cookie.split(';').filter((item) => item.trim().startsWith(`${key}=`)).length

/*
 * Sets new cookie
 */
export const setCookie = (name: string, value: string, days = 730, path = '/') => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
}

/*
 * Get cookie value
 */
export const getCookie = (name: string) => document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=')
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')

/*
 * Sets user langugage
 */
export const setLanguage = (): string => {
    let language = getLocale()

    if (checkCookie('wil_lang')) {
        language = getCookie('wil_lang')
    } else {
      setCookie('wil_lang', language)
    }

    return language
}
