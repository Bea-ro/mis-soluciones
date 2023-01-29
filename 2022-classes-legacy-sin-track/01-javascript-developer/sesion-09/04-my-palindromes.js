const word = ''

const palindromeCheck = (word) => {
let separatedLetters = word.split('');
console.log(separatedLetters)
let invertedLetters = separatedLetters.reverse();
console.log(invertedLetters)
let joinLetters = invertedLetters.join('')
console.log(joinLetters)
if (word === joinLetters) {return true}
else {return false}
}

console.log(palindromeCheck('kayak'))
console.log(palindromeCheck('zebra'))


//resolver aplicando for/forEach y 

const sentence = ''
const palindromeSentence = (sentence) => {
    let uppercase = sentence.toUpperCase();
    console.log(uppercase)
    let separated = uppercase.split(' ')  
    console.log(separated)
    let join = separated.join('')
    console.log(join)
    let split = join.split()
    console.log(split)
    let reverse = split.reverse()
    console.log(reverse)
    if (split === reverse) {return true}
    else {return false}
    }

    console.log(palindromeSentence('A Santa at Nasa'))


    const sentenceTwo = ''


const palindrome = (sentenceTwo) => {
    let upperCaseSentence = sentenceTwo.toUpperCase();
    console.log(upperCaseSentence)
let withoutDotsNorSpaces = upperCaseSentence.replaceAll('.', '').replaceAll(' ', '').replaceAll('!',''); 
console.log(withoutDotsNorSpaces);
let finalSentence = withoutDotsNorSpaces.split('')
console.log(finalSentence)
console.log(finalSentence.reverse())
if (finalSentence === finalSentence.reverse()) {
    return true}
    else {return false}


}

    console.log(palindrome('A Santa at N.A.S.A!'))