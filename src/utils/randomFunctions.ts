const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 48)
}
const getRandomSymbols = () => {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

export const getRandomOne = (is: boolean) => {

    const randoms: number[] = []

    return randoms[Math.floor(Math.random() * randoms.length)]

}
