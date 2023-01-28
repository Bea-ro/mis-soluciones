// // 1. Dado un número largo (ej 123456), eleva cada dígito al cuadrado
// // y concatena todos los números de nuevo como un nuevo número:

// import { ScrollRestoration } from "react-router-dom"

// const concatPowers = (num: number): number => {
// const numToString: string = num.toString() 
// const numsAsString: string[] = numToString.split(``) 
// const getPowers:string[] = numsAsString.map((numAsString)=> {
//     const numAsNumber = Number(numAsString)
//     const powers = numAsNumber**2 
//     const powersAsString = powers.toString()
//     return powersAsString
//     })
// return Number(getPowers.join(''))
// }

// console.log(typeof concatPowers(123456))

// 2. Dada la info de atletas que recibirás de una API, devuelve para cada uno de estos
// un objeto con el formato correcto para cada deporte. Scores será, según el caso:
// Para athletics: {qualifieres: xx, finals: xx}. Para golf: total puntos xx

type Scores = {
    type: string; 
    value: number
}
type Athlet = {
    id: number;
    name: string;
    sport: string;
    scores: Scores[]
    }

const apiInput: (Athlet | null | undefined)[] = [
{
    id: 1,
    name: 'Name 1',
    sport: 'Athletics',
    scores: [
        {
            type: 'qualifiers',
            value: 10
        },
        {
            type: 'finals',
            value: 8.5
        }]
},
{
            id: 2,
            name: 'Name 2',
            sport: 'Golf',
            scores: [
                {
                    type: '1',
                    value: 3
                },
                {
                    type: '2',
                    value: 1
                },
                {
                    type: '3',
                    value: 4
                },
                {
                    type: '4',
                    value: 1
                }],
                
}, 
null, 
undefined
]

type ParsedScore = number | Record<string, number>

type ParsedAthlete = {
    id: number;
    score: ParsedScore
    }


const parseAthletesScores = (input: (Athlet | undefined | null)[]): (ParsedAthlete[]) => {
const filteredInput = input.filter((value) => !!value) as Athlet[]

const apiInputMapped = filteredInput.map((athlet) => {

if (athlet.sport === 'Athletics') {
let newScore: Record<string, number> = {};
athlet.scores.map((score)  => {
newScore[score.type] = score.value })
return {
    id: athlet.id,
    score: newScore
}
}

else if (athlet.sport === 'Golf') {
let newScore: number = 0;
athlet.scores.map((score) => {
newScore += score.value })
return {
    id: athlet.id,
    score: newScore
    }
    }
return {
    id: 0,
    score: 0
}
})

return apiInputMapped

}

const athletesScores = parseAthletesScores(apiInput)
console.log(athletesScores)
  