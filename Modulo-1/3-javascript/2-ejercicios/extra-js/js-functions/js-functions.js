function sum(numberOne , numberTwo) {
  return numberOne > numberTwo? numberOne : numberTwo
}
console.log(sum(4,20))



const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
return param.reduce((acc, next) => acc.length >= next.length? acc : next)
}
console.log(findLongestWord(avengers))



const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(param) {
return param.reduce((acc, next) => acc += next)
}
console.log(sumAll(numbers))


const nums = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  return param.reduce((acc, next) => acc += next) / param.length
}
console.log(average(nums))


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'Rock', 8, 'Code'];

function averageWord(param) {
    let total = 0;
    let totalNums = 0;
    let totalStrings = 0;
    for (let i = 0; i < param.length; i++) {
    const el = param[i];
    if (typeof el ==='string') {totalStrings += el.length}
    else {totalNums += el}};
    console.log(totalStrings)
    console.log(totalNums)
    return total = totalStrings + totalNums
    }     
console.log(averageWord(mixedElements))
  


const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
const withoutDuplicates = []
console.log(withoutDuplicates)
param.map((dupli) => 
withoutDuplicates.includes(dupli)? withoutDuplicates.push() : withoutDuplicates.push(dupli))
return withoutDuplicates
}
console.log(removeDuplicates(duplicates))



const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(param) {
  return nameFinder.includes(param)? nameFinder.indexOf(param) : false
}
console.log(finderName('Peggy'))


const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'rock',
    'code'
  ];
//   function repeatCounter(param) {
//     let count = 0
//     counterWords.forEach((word)=> {
//     word === param? count += 1 : count
//     })
// return count
// }
// console.log(repeatCounter('sleep'))

function repeatCounter(param) {
    let counter = {};
    for (let i = 0; i < param.length; i++) {
      if (param[i] in counter) {
        counter[param[i]]++;
      } else {
        counter[param[i]] = 1;
      }
    }
    return console.log(counter);
  }

  repeatCounter(counterWords);


