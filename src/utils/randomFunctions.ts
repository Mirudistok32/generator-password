import { CheckBottonsType } from '../redux/password-reducer';

const getRandomLetters = () => {
    return String.fromCharCode(Math.floor(Math.random() * 52) + 65)
}
const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48).toString()
}
const getRandomSymbols = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

export const getRandomOne = (data: Array<CheckBottonsType>) => {

    let randoms: Array<string> = [];

    /* eslint-disable */
    let empty: Array<number | string> = data.map(i => {
        if (i.title === 'Numbers' && i.checked) {
            randoms.push(getRandomNumber())
        }
        if (i.title === 'Letters' && i.checked) {
            randoms.push(getRandomLetters())
        }
        if (i.title === 'Symbols' && i.checked) {
            randoms.push(getRandomSymbols())
        }
        if (i.title === 'Uppercase' && i.checked) {
            randoms.push(getRandomUpper())
        }
        if (i.title === 'Lowercase' && i.checked) {
            randoms.push(getRandomLower())
        }
        return i.id
    })
    return randoms[Math.floor(Math.random() * randoms.length)]
}
